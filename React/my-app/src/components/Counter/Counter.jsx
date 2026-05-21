import { useState } from "react";
import "../App.css";
import "./counter.scss";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div className="flex column">
        <h1>Hello React!</h1>
        <h2>Count: {counter}</h2>
      </div>
      <div className="flex">
        <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
        <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
      </div>
    </div>
  );
};
