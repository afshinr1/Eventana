import { Button, Typography } from "@material-ui/core";
import React, { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { username, password, email: "jaja@gmail.com" };
    if (username && password) {
      const obj = await fetch("/api/authentication/register", {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
      });
      if (obj.ok) {
        setError("Successfully registered user");
      } else {
        obj.json().then((res) => setError(res.error));
      }
    }else{
      setError("Fill out all fields");
    }
  };

  return (
    <div>
      <Typography variant='body2' color='error'>{error}</Typography>
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
          type="password"
          placeholder="Enter password"
        />

        <Button type="submit" color="secondary" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Register;
