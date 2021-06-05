import React, { useState } from "react";

function App() {
  const [isMousedOver, setMousedOver] = useState(false);
  const [headingText, setHeadingText] = useState("Hello");

  function handleMouseOver() {
    setMousedOver(true);
  }

  function handleMouseOut() {
    setMousedOver(false);
  }

  function handleClick() {
    setHeadingText("Submitted");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
