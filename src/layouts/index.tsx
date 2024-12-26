import React, { ReactNode } from "react";
import NavSection from "./header";
import ScrollUpButton from "./scroll-up-button";
import Footer from "./footer";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <NavSection />
      {children}
      <Footer />
      <ScrollUpButton />
    </div>
  );
};

export default MainLayout;
