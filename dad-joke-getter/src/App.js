import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import Register from "./components/Register";
import Login from "./components/Login";
import JokesList from "./components/JokesList";

function App() {
  return (
    <div className="App">
      <Route
        exact
        path="/"
        render={props => {
          return <Register {...props} />;
        }}
      />
      <Route
        path="/login"
        render={props => {
          return <Login {...props} />;
        }}
      />
      <Route
        path="/jokes-list"
        render={props => {
          return <JokesList {...props} />;
        }}
      />
    </div>
  );
}

export default App;
