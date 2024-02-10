import React from "react";

type VioletButtonProps = {
  addStyles: string;
  children: React.ReactNode;
};

const VioletButton = ({ addStyles, children }: VioletButtonProps) => {
  return (
    <button
      className={`font-bold bg-violet text-white hover:bg-white hover:text-violet
      active:shadow-[#6523d71a_0px_-50px_36px_-28px_inset] duration-300 ease-in
      violet-btn-anim ${addStyles}`}
    >
      {children}
    </button>
  );
};

export default VioletButton;
