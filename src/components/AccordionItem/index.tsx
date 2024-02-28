import { useState } from "react";

type AccordionItemProps = {
  question: string;
  answer: string;
};

const AccordionItem = ({ question, answer }: AccordionItemProps) => {
  const [isActive, setIsActive] = useState(false);
  const toggleOpening = () => setIsActive((value) => !value);

  return (
    <div
      className={
        isActive
          ? "flex flex-col border-b border-b-[#96a0b5] !border-t-2 !border-t-violet pb-4 linear-transition active"
          : "flex flex-col border-b border-b-[#96a0b5] linear-transition"
      }
    >
      {/* question */}
      <div
        onClick={toggleOpening}
        className="flex justify-between gap-x-5 p-4 mobileXL:p-6 cursor-pointer z-10"
      >
        <h4 className="text-[#121f3e] text-xl tabletL:text-2xl font-bold text-ellipsis">
          {question}
        </h4>

        <svg
          className={
            isActive
              ? "min-w-8 w-8 min-h-8 h-8 fill-none -rotate-180 duration-500 ease-out"
              : "min-w-8 w-8 min-h-8 h-8 fill-none duration-500 ease-out"
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
            ? "max-h-auto"
            : "max-h-0 overflow-hidden"
        }
      >
        <p className="text-[#96a0b5] text-xl tabletL:text-2xl font-normal px-6">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default AccordionItem;
