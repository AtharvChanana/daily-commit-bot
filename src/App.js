import React, { useState } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [repoPath, setRepoPath] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/schedule-commit", {
        username,
        email,
        repoPath,
      });
      alert("Commit scheduled successfully!");
    } catch (error) {
      console.error("Error scheduling commit:", error);
    }
  };

  return (
    <div>
      <h1>GitHub Commit Bot</h1>
      <input
        type="text"
        placeholder="GitHub Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="GitHub Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Repository Path"
        value={repoPath}
        onChange={(e) => setRepoPath(e.target.value)}
      />
      <button onClick={handleSubmit}>Schedule Commit</button>
    </div>
  );
}

export default App;
