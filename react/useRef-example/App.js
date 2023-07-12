import React, { useState, useRef, useEffect } from "react";

const App = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.style.outline = "2px solid black";
  });
  return (
    <div>
      <form>
        <label> Name:</label>
        <input type="text" ref={inputRef} placeholder="name" />
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;

