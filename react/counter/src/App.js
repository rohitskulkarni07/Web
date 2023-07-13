import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      counter: {count}
      <button onClick={() => setCount((count) => count + 1)}> Inc </button>
      <button
        onClick={() => setCount((count) => (count > 0 ? count - 1 : count))}
      >
        {" "}
        Dec{" "}
      </button>
    </div>
  );
}
