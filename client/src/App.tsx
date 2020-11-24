import Container from "@material-ui/core/Container/Container";
import "fontsource-roboto";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Routes } from "./Routes";

const App: React.FC = () => {
  return (
    <Container>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Container>
  );
};

export default App;
