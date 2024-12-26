"use client";

import React, { ReactNode } from "react";
import NavSection from "./header";
import ScrollUpButton from "./scroll-up-button";
import Footer from "./footer";
import useScrollReveal from "@/hooks/use-scroll-revel";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  useScrollReveal([".profile", ".contact__form"]);
  useScrollReveal(".info", { origin: "left", delay: 800 });
  useScrollReveal(".skills", { origin: "left", delay: 1000 });
  useScrollReveal(".about", { origin: "right", delay: 1200 });
  useScrollReveal([".projects__card", ".services__card", ".experience__card"], {
    interval: 100,
  });
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
