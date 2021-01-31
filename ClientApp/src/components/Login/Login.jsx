import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { username, password, rememberMe : false};
    const response  = await fetch("/api/authentication/login", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
        "accept": "application/json",
      },
    })
    if(response.ok){
      response.json()
        .then(data =>{
          console.log(data);
          sessionStorage.setItem("user", JSON.stringify(data.user));
          sessionStorage.setItem("token", data.token);
          history.push("/");
        });
    }
    else{
      console.log("Log in failure");
      setError("Incorrect username/password combination")
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <span>{error}</span>
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

        <Button onClick={handleSubmit} variant='contained' color='secondary'>Submit</Button>
      </form>
    </div>
  );
}

export default Login;
