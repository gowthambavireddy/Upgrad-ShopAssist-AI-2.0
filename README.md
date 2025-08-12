# 🛒 Shop Assist: AI-Powered Laptop Chatbot

Shop Assist is a **Python Flask** web application that acts as a conversational AI chatbot to help users **find, filter, and compare laptops** in a natural way.  
It combines structured laptop data from a CSV file with **AI-powered responses** to deliver a seamless, context-aware shopping assistant experience.

---

## 🚀 Features
- **Natural Conversation:** Context-aware chat for continuous, human-like interactions.
- **Multi-Criteria Search:** Filter laptops by brand, budget, RAM, and usage type.
- **Laptop Comparison:** Directly compare two models side-by-side.
- **AI-Enhanced Responses:** Turns raw laptop specs into user-friendly recommendations.
- **Responsive UI:** Modern chat interface built with Tailwind CSS.
- **Typing Indicator & Auto Scroll:** Enhances real-time chat experience.

---

## 📂 Project Structure
│
├── app.py # Flask backend - routes & session management

├── conversation.py # Chatbot logic & laptop filtering

├── laptop.csv # Laptop database (CSV file)

├── templates/

│ └── index.html # Frontend chat interface

├── static/

│ ├── css/ # Tailwind CSS styles

│ └── js/ # JavaScript for chat interactions

└── README.md # Project documentation


## ⚙️ Installation & Setup

### 1️⃣ Prerequisites
- **Python 3.8+**
- **pip** installed 
- An **OpenAI key**

### 3️⃣ Install dependencies
- pip install -r requirements.txt
### 4️⃣ Add your API key
- Create a file named OPENAI_API_Key.txt (or update your environment variable).

- Paste your OpenAI / Gemini API key inside.

### 5️⃣ Run the application
- bash
- Copy
- Edit
- python app.py
- Open your browser and go to http://127.0.0.1:5000/

#### 🖥️ Usage
- Open the web app in your browser.

- Type queries like:

- "Show me HP laptops under ₹60,000"

- "Compare Dell G15 and Asus TUF Gaming"

- "Suggest a laptop for video editing under ₹80,000"

- Get AI-powered recommendations instantly.

#### 🧠 How It Works
- User sends a message via the web UI.

- Flask backend (app.py) sends the message + chat history to conversation.py.

- Chatbot logic filters laptops from laptop.csv based on user intent.

- AI model formats a friendly, coherent reply.

- Frontend updates with the new message & scrolls automatically.

#### 📧 Contact
- Author: Your Name
- GitHub: @gowthambavireddy
- Email: gowthambavireddy@gmail.com
