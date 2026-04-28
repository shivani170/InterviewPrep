import { useState } from "react";
import "../App.css";
import './counter.scss'

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>{counter}</div>
      <div className="flex">
        <button onClink={() => setCounter(prev => prev++)}>+</button>
        <button onClink={() => setCounter(prev => prev--)}>-</button>
      </div>
    </>
  );
};
