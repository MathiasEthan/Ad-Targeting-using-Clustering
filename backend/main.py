from flask import Flask, jsonify
import google.generativeai as genai

app = Flask(__name__)

@app.route("/captions/<caption>")
def generate_captions(caption):
    # Define the prompt template
    prompt_template = f"""
    I have a caption: {caption}.

    Generate variations of this caption tailored to the following audience segments to maximize engagement. Each variation should:

        Be written in a tone and style that resonates with the specific audience.
        Address their unique perspectives, interests, and concerns.
        Maintain the core message while adding context or appeal relevant to their age, gender, and life stage.

    Audience segments to target:

        A 15-year-old male teenager.
        A 45-year-old unmarried man.
        A 60-year-old lady.
        A 25-year-old married man.
        A 30-year-old woman.

    For each segment, provide a brief description of how the caption appeals to them, followed by the rewritten caption. Only generate the captions 
    and seperate each one of them with a "|". make the captions slightly longer and add some hashtags. Do not add any other text except the actual captions and hashtags
    remove all the "/n". DO NOT INLUDE "/N"
    """

    try:
        # Initialize the Google Generative AI client
        genai.configure(api_key="AIzaSyB2ZqhfUFmoUNFgQuS9sN_B96XlZJwah5o")  # Replace with your actual API key
        model = genai.GenerativeModel("gemini-1.5-flash")
        
        # Generate content using the prompt
        response = model.generate_content(prompt_template)
        
        # Extract content from the response
        generated_captions = []
        for candidate in response.candidates:
            if candidate.content and candidate.content.parts:
                for part in candidate.content.parts:
                    generated_captions.append(part.text)
        captions = "".join(generated_captions).split("|")
        return captions
        # Return the generated captions as a JSON response
    
    except Exception as e:
        # Return the error message as a JSON response
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
