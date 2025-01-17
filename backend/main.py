from flask import Flask, jsonify
import google.generativeai as genai
from dotenv import load_dotenv
from flask_cors import CORS
import os

app = Flask(__name__)
load_dotenv()
CORS(app)

@app.route("/captions/<caption>/<tags>/<length>/<language>")
def generate_captions(caption, tags, length,language):
    lengths = {
        "long" : "3-4 sentences",
        "short" : "1-2 sentences",
        "medium" : "2-3 sentences"
    }
    # Define the prompt template
    prompt_template = f"""
    I have a caption: {caption}. The user has also defined some tags that he will need in his caption: {tags}. Ensure that all the generated captions strictly adhere to these guidelines.
    the length of the caption should be : {lengths[length]}
    Captions should be in: {language}

    Generate variations of this caption tailored to the following audience segments to maximize engagement. Each variation should:

        Be written in a tone and style that resonates with the specific audience.
        Address their unique perspectives, interests, and concerns.
        Maintain the core message while adding context or appeal relevant to their age, gender, and life stage.

    Audience segments to target:

        A 15-year-old male teenager.
        A 45-year-old unmarried man.
        A 60-year-old lady.
        A 25-year-old married man.

    For each segment, provide a brief description of how the caption appeals to them, followed by the rewritten caption. Only generate the captions 
    and separate each one of them with a "|". Add some hashtags. Do not add any other text except the actual captions and hashtags.
    """

    try:
        # Initialize the Google Generative AI client
        api_key = os.getenv("API_KEY")
        genai.configure(api_key=api_key)  # Replace with your actual API key
        model = genai.GenerativeModel("gemini-1.5-flash")
        
        # Generate content using the prompt
        response = model.generate_content(prompt_template)
        
        # Extract content from the response and clean it
        generated_captions = []
        for candidate in response.candidates:
            if candidate.content and candidate.content.parts:
                for part in candidate.content.parts:
                    # Clean text to remove \n and excess spaces
                    cleaned_text = part.text.replace("\n", "").strip()
                    generated_captions.append(cleaned_text)
        
        # Join the captions into a single string and split by "|"
        captions = "".join(generated_captions).split("|")
        captions = [caption.strip() for caption in captions if caption]  # Remove empty captions and trim spaces
        
        # Return the cleaned captions as a JSON response
        return jsonify(captions)
    
    except Exception as e:
        # Return the error message as a JSON response
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
