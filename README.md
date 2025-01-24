#  **Ad-Targeting-using-Clustering**

 Ad-Targeting-using-Clustering  is an advanced ad-serving platform that uses clustering and machine learning to deliver highly targeted advertisements to users. By combining **DBSCAN** for user clustering and **Softmax** for predicting product categories, along with **Gemini** for AI-powered caption generation,  Ad-Targeting-using-Clustering  ensures precise ad delivery and high engagement.

---

## **Features**

### 🔥 Automatic Ad Serving
- Leverages **DBSCAN (Density-Based Spatial Clustering)** to segment users into meaningful clusters based on their behavioral and demographic data.
- Targets ads to user groups that are most likely to engage with the content.

### 🧠 AI-Powered Caption Generation
- Utilizes **Gemini** to generate highly engaging captions tailored to each user cluster.
- Captions dynamically adapt to cluster attributes, increasing user interaction.

### 🛒 Product Category Prediction
- Uses **Softmax** to predict the product categories that users are most likely to purchase.
- Ensures that ads feature products with the highest likelihood of conversion for each cluster.

### 🎯 User-Centric Targeting
- Analyzes user behavior and demographic data to improve ad delivery precision.
- Adapts over time to evolving user preferences and trends.

### ⚡ Fast and Modern Frontend
- Built using **Vite** and **React** for a blazing-fast and interactive user experience.
- Styled with **Radix UI**, **Radix Themes**, and **Radix Icons** for a consistent, accessible, and modern look.

### 🔄 Robust Backend
- Powered by **Flask**, providing a lightweight yet powerful backend for handling clustering and product prediction tasks.

---

## **Technologies Used**
- **Vite**: Lightning-fast development environment for the frontend.
- **React**: For building a responsive and modern user interface.
- **Radix UI**, **Radix Themes**, and **Radix Icons**: For styling, components, and iconography.
- **DBSCAN**: Clustering algorithm used to group users into meaningful segments.
- **Softmax**: For predicting the product categories users are most likely to purchase.
- **Gemini**: AI-powered caption generator for creating engaging ad captions.
- **Flask**: Lightweight and efficient backend framework.

---

## **How It Works**

1. **User Clustering**:
   - **DBSCAN** groups users into clusters based on behavioral data (e.g., browsing history, preferences).
   - Outliers are either ignored or handled as separate entities.

2. **Product Prediction**:
   - **Softmax** predicts the product categories that are most relevant to each user cluster.
   - Ensures the ad content aligns with the users' likely purchasing intent.

3. **Caption Generation**:
   - **Gemini** generates AI-driven captions that are optimized for engagement and tailored to each user cluster.

4. **Ad Delivery**:
   - Ads are matched to clusters and served through the React frontend, ensuring real-time, targeted delivery.

---

## **Installation**

### Prerequisites
- **Node.js** and **npm** installed for the frontend.
- **Python 3.7+** and **Flask** installed for the backend.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ Ad-Targeting-using-Clustering .git
   cd  Ad-Targeting-using-Clustering 
2. Set up frontend:
   ```bash
   npm install
   npm run dev
3. Set up backend:
   ```bash
   cd backend
   (first configure your gemini api key in a .env file in this folder using "API_KEY" as the variable name)
   python main.py
4. Open your browser :
   ```bash
   The frontend will be running at: http://localhost:3000
   The backend API will be accessible at: http://localhost:5000
