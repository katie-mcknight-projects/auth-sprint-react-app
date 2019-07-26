import React, { useState } from "react";
import axios from "axios";

const Register = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function register(body) {
    axios
      .post("http://localhost:3300/api/register", body)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    props.history.push("/login");
  }
  return (
    <div>
      <h1>REGISTER</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          const body = {
            username,
            password
          };
          register(body);
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

export default Register;
