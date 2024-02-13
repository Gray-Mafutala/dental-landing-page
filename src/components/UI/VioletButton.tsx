import React from "react";

type VioletButtonProps = {
  type?: string;
  addStyles?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const VioletButton = ({
  addStyles = "",
  children,
  onClick,
}: VioletButtonProps) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`font-bold bg-violet text-white hover:bg-white hover:text-violet
      active:shadow-[#6523d71a_0px_-50px_36px_-28px_inset] duration-300 ease-in
      violet-btn-anim ${addStyles}`}
    >
      {children}
    </button>
  );
};

export default VioletButton;
