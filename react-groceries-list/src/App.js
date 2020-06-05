import React from "react";
import "./App.css";
import Container from "./Container";

function App() {
  return (
    <div className="app">
      <header className="groceries-header">
        <h1> Boodschappenlijst</h1>
      </header>
      <Container />
    </div>
  );
}

export default App;
