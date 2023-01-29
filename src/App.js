import React from "react";
import Blog from "./components/Article";
import "./App.css";
import Article from "./components/Article";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Daily Newsletter</h1>
      </header>
      <Article />
      {/* 
        1. Section containing Crypto prices, tredning topics etc.
        2. Section containing articles found for that day.
        3. Section for an article generated by AI.
      */}
    </div>
  );
}

export default App;
