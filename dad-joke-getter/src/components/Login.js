import React, { useState } from "react";
import axios from "axios";

const Login = props => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  function login(body) {
    axios
      .post("http://localhost:3300/api/login", body)
      .then(res => {
        console.log(res.data);

        console.log(res.data.message);
        localStorage.setItem("user-token", res.data.token);
      })
      .catch(err => {
        console.log(err);
      });
    props.history.push("/jokes-list");
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          const body = {
            username,
            password
          };
          login(body);
        }}
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
