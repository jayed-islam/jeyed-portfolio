"use client";

import React, { useEffect } from "react";
import { RiArrowUpLine } from "@remixicon/react";

const ScrollUpButton: React.FC = () => {
  useEffect(() => {
    const scrollUpButton = document.getElementById("scroll-up");

    const handleScroll = () => {
      if (window?.scrollY >= 351) {
        scrollUpButton?.classList.add("show-scroll");
      } else {
        scrollUpButton?.classList.remove("show-scroll");
      }
    };

    window?.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`scrollup cursor-pointer`}
      id="scroll-up"
      onClick={scrollToTop}
    >
      <RiArrowUpLine />
    </div>
  );
};

export default ScrollUpButton;
