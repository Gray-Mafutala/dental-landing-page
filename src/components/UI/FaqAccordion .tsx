import React, { useState } from "react";

type FaqAccordionProps = {
  question: string;
  answer: string;
};

const FaqAccordion = ({ question, answer }: FaqAccordionProps) => {
  const [isActive, setIsActive] = useState(false);
  const toogleFaqAccordion = () => setIsActive((value) => !value);

  return (
    <div
      className={
        isActive
          ? "flex flex-col border-b border-b-[#96a0b5] !border-t-2 !border-t-violet pb-6 linear-transition active"
          : "flex flex-col border-b border-b-[#96a0b5] linear-transition"
      }
    >
      {/* question */}
      <div
        onClick={toogleFaqAccordion}
        className="flex justify-between py-6 px-6 cursor-pointer z-10"
      >
        <h4
          className="text-[#121f3e] text-2xl font-bold whitespace-nowrap
          text-ellipsis"
        >
          {question}
        </h4>

        <svg
          className={
            isActive
              ? "w-8 h-8 fill-none -rotate-180 duration-500 ease-out"
              : "w-8 h-8 fill-none duration-500 ease-out"
          }
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            className={
              isActive
                ? "stroke-violet stroke-2 duration-500"
                : "stroke-[#6d7d93] stroke-2 duration-500"
            }
            d="m24 12-8 8-8-8"
          />
        </svg>
      </div>

      {/* answer */}
      <div
        className={
          isActive
            ? "max-h-16 duration-300 ease-out"
            : "max-h-0 overflow-hidden duration-300 ease-out"
        }
      >
        <p className="text-[#96a0b5] text-2xl font-normal px-6">{answer}</p>
      </div>
    </div>
  );
};

export default FaqAccordion;