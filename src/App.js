import logo from "./logo.svg";
import "./App.css";
import Routes from "./containers/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import { firestore } from "./";

function App() {
  const [movies, setMovies] = useState([]);
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
