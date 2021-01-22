import React, { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { username, password, email : "jaja@gmail.com" };
   const obj = await fetch("/api/authentication/register", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
    if(obj.ok){
      const res = obj.json();
      setError("Successfully registered user");
    }else{
      obj.json()
      .then(res => setError(res.error));
      setError("Error registering new user");
    }
  };

  return (
    <div>
      <span>{error}</span>
      <h1>Register</h1>
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
          type='password'
          placeholder="Enter password"
        />

        <input type="submit" />
      </form>
    </div>
  );
}

export default Register;
