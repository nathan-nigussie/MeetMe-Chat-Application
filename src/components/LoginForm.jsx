import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authObject = {
      "Project-ID": "381e670f-f630-4514-9741-adf81c9c7d1a",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      //the user provides username / password ---> Chatengine ----> give messages back if the username and passowrd are registered
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      //if this request works ---> user able to login
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      window.location.reload();
    } catch (error) {
      //error ---> it asks teh user to log in with new username
      setError("Oops,Incorrect Credentials.");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">MeetMe ሚትሚ Chat App</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
        </form>
        <h2 className="error">{error}</h2>
      </div>
    </div>
  );
};

export default LoginForm;
