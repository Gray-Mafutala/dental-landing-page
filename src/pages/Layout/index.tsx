import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      element && element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  });

  return (
    <main id="main" className="px-5 max-w-[1390px] mx-auto w-full flex flex-col gap-y-28">
      {children}
    </main>
  );
};

export default Layout;
