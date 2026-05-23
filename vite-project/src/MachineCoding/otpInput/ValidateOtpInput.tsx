import { useEffect, useRef, useState } from "react";
import "./otp.scss";

const OTP_DIGITS = 6;

const ValidateOtpInput = () => {
  const [inputArr, setInputArr] = useState(new Array(OTP_DIGITS).fill(""));
  const inputRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    if (isNaN(Number(e.target.value))) return;
    const newArr = [...inputArr];
    newArr[idx] = e.target.value.trim();
    setInputArr(newArr);
    e.target.value && inputRef.current[idx + 1]?.focus();
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    idx: number,
  ) => {
    if (!e.currentTarget.value && e.key === "Backspace") {
      inputRef.current[idx - 1]?.focus();
    }
  };

  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  return (
    <div className="otp-container">
      <h2>Validate OTP</h2>
      {inputArr.map((input, idx) => {
        return (
          <input
            key={idx}
            className="border border-black-300 text-black otp-input"
            onChange={(e) => handleInput(e, idx)}
            value={input}
            type="text"
            maxLength={1}
            ref={(input) => {
              inputRef.current[idx] = input;
            }}
            onKeyDown={(e) => handleKeyDown(e, idx)}
          />
        );
      })}
    </div>
  );
};

export default ValidateOtpInput;
