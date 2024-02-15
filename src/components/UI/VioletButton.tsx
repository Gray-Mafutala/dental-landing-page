import React from "react";
import { Link } from "react-router-dom";

type VioletButtonProps = {
  type?: "submit" | "reset" | "button";
  isLink?: boolean;
  link?: string;
  addStyles?: string;
  children: React.ReactNode;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
};

const VioletButton = ({
  type,
  isLink = false,
  link = "",
  addStyles = "",
  children,
  onClick,
}: VioletButtonProps) => {
  return (
    <>
      {isLink ? (
        <Link
          to={link}
          onClick={onClick}
          className={`font-bold bg-violet text-white hover:bg-white hover:text-violet
          active:shadow-[#6523d71a_0px_-50px_36px_-28px_inset] duration-300 ease-in
          violet-btn-anim ${addStyles}`}
        >
          {children}
        </Link>
      ) : (
        <button
          type={type}
          onClick={onClick}
          className={`font-bold bg-violet text-white hover:bg-white hover:text-violet
          active:shadow-[#6523d71a_0px_-50px_36px_-28px_inset] duration-300 ease-in
          violet-btn-anim ${addStyles}`}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default VioletButton;
