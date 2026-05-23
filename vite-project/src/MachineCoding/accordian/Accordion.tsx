import { useState } from "react";
import { ACCORDION_CONFIG } from "./contants";

const Accordion = ({items = ACCORDION_CONFIG}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleAccordion = (idx: number) => () => {
    setOpenIndex(openIndex === idx ? null : idx);
  };
  return (
    <div className="p-20 flex flex-col gap-4 border border-gray-300 rounded-lg max-w-3xl m-auto bg-gray-100">
      {items.map((data, idx) => (
        <div key={idx} onClick={handleAccordion(idx)}>
          <div className="flex gap-4 p-4 border border-black-300 rounded-lg bg-gray-200 justify-between transition-all duration-300">
            <div>{data.title}</div>
            <span>{openIndex !== idx ? "▼" : "▲"}</span>
          </div>
          {openIndex === idx && <div className="bg-white p-4">{data.content}</div>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
