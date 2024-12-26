import React, { ReactNode } from "react";
import NavSection from "./header";
import ScrollUpButton from "./scroll-up-button";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      {/* <NavSection /> */}
      {children}
      <ScrollUpButton />
    </div>
  );
};

export default MainLayout;
