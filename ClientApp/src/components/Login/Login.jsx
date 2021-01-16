import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { username, password};
    fetch("/api/authentication/login", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((obj) => obj.json())
      .then((res) => console.log(res));
  };
  const handleTest = () => {
    fetch("/api/authentication/test");
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Emter username"
        />
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />

        <input type="submit" />
      </form>
      <button onClick={handleTest}>Test</button>
    </div>
  );
}

export default Login;
