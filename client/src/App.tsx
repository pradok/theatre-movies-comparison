import { createStyles, makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container/Container";
import "fontsource-roboto";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Routes } from "./Routes";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      "& h1": {
        "text-align": "center",
      },
    },
  })
);

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <h1 style={{ margin: "0 auto", display: "block" }}>Prince's Theatre</h1>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Container>
  );
};

export default App;
