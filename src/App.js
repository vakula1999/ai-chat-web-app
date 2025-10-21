import React, { useState } from "react";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [chatHistory, setChatHistory] = useState([]); // ✅ Store past chats
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🔑 Replace this with your actual API key
  const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

  const handleAsk = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setError(null);
    setResponse("");

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }],
        }),
      });

      const data = await res.json();

      if (data.error) throw new Error(data.error.message);

      const reply = data.choices[0].message.content.trim();

      // ✅ Save new chat to history
      const newChat = { prompt, reply };
      setChatHistory((prev) => [newChat, ...prev]);

      // ✅ Clear current input
      setPrompt("");
      setResponse(reply);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    // ✅ Clear all history
    setChatHistory([]);
    setResponse("");
    setPrompt("");
    setError(null);
  };

  return (
    <div className="app">
      <h1>AI Chat App 🤖</h1>

      <textarea
        placeholder="Type your question here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      ></textarea>

      <div className="button-row">
        <button onClick={handleAsk} disabled={loading}>
          {loading ? "Thinking..." : "Ask"}
        </button>

        <button className="clear" onClick={handleClear}>
          Clear
        </button>
      </div>

      {error && <p className="error">⚠️ {error}</p>}

      <div className="chat-history">
        {chatHistory.length === 0 && <p>No chat history yet.</p>}
        {chatHistory.map((chat, index) => (
          <div key={index} className="chat-item">
            <p><strong>You:</strong> {chat.prompt}</p>
            <p><strong>AI:</strong> {chat.reply}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
