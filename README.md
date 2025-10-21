# 🧠 AI Chat App

A lightweight **AI-powered chat application** built with **React.js** that connects to the **OpenAI API** to deliver intelligent real-time responses.  
It demonstrates clean UI design, solid frontend architecture, and API integration — built as part of a **Frontend Engineer assessment challenge**.

---

## ✨ Features

- 📝 Input box for user prompts/questions  
- ⚡ Real-time AI responses fetched via OpenAI API  
- 💬 Dynamic display of AI output  
- ⏳ Loading indicators and error handling  
- 🗂️ Persistent chat history for user–AI interaction  
- 🧹 “Clear Chat” button to reset history  
- 📱 Fully responsive and minimal interface  

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React.js |
| **Styling** | CSS3 (custom responsive design) |
| **AI API** | OpenAI GPT model |
| **Version Control** | Git & GitHub |

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/vakula1999/ai-chat-web-app.git
cd ai-chat-web-app
```

### 2️⃣ Install Dependencies
```bash
npm install
node -v
npm -v
```

### 3️⃣ Create Environment File
Create a file named `.env` in the root directory and add:
```bash
REACT_APP_OPENAI_API_KEY=your_openai_api_key_here
```


### 4️⃣ Run the App
```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

## 🖼️ Screenshot

> Example UI preview:  
> <img width="691" height="884" alt="image" src="https://github.com/user-attachments/assets/89552620-2e43-4fd1-9df8-76e602ce487e" />
>


---

## 📘 Project Structure
```
ai-chat-web-app/
│
├── public/
│   └── index.html
│
├── src/
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── .gitignore
├── package.json
├── README.md
└── .env (ignored)
```

