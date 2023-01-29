import React from "react";
import Article from "./components/Article";
import Clock from "./components/Clock";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Daily Newsletter</h1>
        <Clock />
      </header>
      {/* <NYT /> */}
      <Article />
      {/* 
        1. Section containing Crypto prices, trending topics etc.
        2. Section containing articles found for that day.
        3. Section for an article generated by AI.
        4. Weather info from a weather api
        5. Date and time
      */}
    </div>
  );
}

export default App;
