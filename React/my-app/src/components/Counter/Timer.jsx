import { useState, useEffect } from "react";
const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  console.log(seconds);

  return (
    <div className="flex column">
      <h2>Timer: {seconds}</h2>
    </div>
  );
};

export default Timer;
