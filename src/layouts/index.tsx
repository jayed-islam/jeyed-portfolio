import React, { ReactNode } from "react";
import NavSection from "./header";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <NavSection />
      {children}
    </div>
  );
};

export default MainLayout;
