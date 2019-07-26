import React, { useState, useEffect } from "react";
import axios from "axios";

import Joke from "./Joke";

const JokesList = props => {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3300/api/jokes", {
        headers: {
          Authorization: localStorage.getItem("user-token")
        }
      })
      .then(res => {
        console.log(res.data);
        setJokes(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <h1>JOKES</h1>
      {/* {jokes && <h3>{jokes[0].joke}</h3>} */}

      {jokes &&
        jokes.map(joke => {
          console.log("logging");
          return <Joke joke={joke} />;
        })}
    </div>
  );
};

export default JokesList;
