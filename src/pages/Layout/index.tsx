import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <main
      className="px-5 max-w-[1390px] mx-auto w-full flex flex-col gap-y-28"
    >
      {children}
    </main>
  );
};

export default Layout;
