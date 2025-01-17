# **SmartAdGen**

SmartAdGen is an advanced ad-serving platform that uses clustering and machine learning to deliver highly targeted advertisements to users. By combining **DBSCAN** for user clustering and **Softmax** for optimized caption selection, SmartAdGen ensures precise ad delivery and high engagement.

---

## **Features**

### 🔥 Automatic Ad Serving
- Leverages **DBSCAN (Density-Based Spatial Clustering)** to segment users into meaningful clusters based on their behavioral and demographic data.
- Targets ads to user groups that are most likely to engage with the content.

### 🧠 AI-Powered Caption Generation
- Utilizes **Softmax** in Python to select the most relevant and engaging captions for each user cluster.
- Dynamically adapts captions based on cluster attributes, increasing user interaction.

### 🎯 User-Centric Targeting
- Analyzes user behavior and demographic data to improve ad delivery precision.
- Adapts over time to evolving user preferences and trends.

### ⚡ Fast and Modern Frontend
- Built using **Vite** and **React** for a blazing-fast and interactive user experience.
- Styled with **Radix Themes** and **Radix Icons** for a consistent and modern look.

---

## **Technologies Used**
- **Vite**: Lightning-fast development environment for the frontend.
- **React**: For building a responsive and modern user interface.
- **Radix Themes** and **Radix Icons**: For UI styling and iconography.
- **DBSCAN**: Clustering algorithm used to group users into meaningful segments.
- **Softmax**: For caption selection, optimizing engagement rates.
- **Python**: Backend language for machine learning and data processing.

---

## **How It Works**

1. **User Clustering**:
   - **DBSCAN** groups users into clusters based on behavioral data (e.g., browsing history, preferences).
   - Outliers are either ignored or handled as separate entities.

2. **Caption Generation**:
   - A Python-based machine learning model leverages **Softmax** to generate captions that are most likely to engage the target cluster.

3. **Ad Delivery**:
   - Ads are matched to clusters and served through the React frontend, ensuring real-time, targeted delivery.

---

## **Installation**

### Prerequisites
- **Node.js** and **npm** installed for the frontend.
- **Python 3.7+** installed for the backend.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/smartadgen.git
   cd SmartAdGen
1. run in npm:
   ```bash
   npm run dev