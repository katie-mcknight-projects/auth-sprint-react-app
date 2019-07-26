import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Card } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    width: "80%",
    margin: "1rem"
  }
});

const Joke = props => {
  const classes = useStyles();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "75%"
      }}
    >
      <Card className={classes.card}>
        <h2>{props.joke.joke}</h2>
      </Card>
    </div>
  );
};

export default Joke;
