"use client";

import Link from "next/link";
import React, { useEffect, useRef, useCallback } from "react";
import {
  RiHomeLine,
  RiFolderLine,
  RiFileEditLine,
  RiHonourLine,
  RiSendPlaneLine,
} from "@remixicon/react";
import { usePathname } from "next/navigation";

const NavSection: React.FC = () => {
  const sectionsRef = useRef<NodeListOf<HTMLElement> | null>(null);

  const pathname = usePathname();

  const scrollActive = useCallback(() => {
    const scrollDown = window?.scrollY;

    if (!sectionsRef.current) {
      sectionsRef.current = document?.querySelectorAll("section[id]");
    }

    sectionsRef.current.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 58;
      const sectionId = current.getAttribute("id");
      const sectionLink = document.querySelector<HTMLAnchorElement>(
        `.nav__list a[href*="${sectionId}"]`
      );

      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        sectionLink?.classList.add("active-link");
      } else {
        sectionLink?.classList.remove("active-link");
      }
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => scrollActive();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollActive]);

  const isHomePage = pathname === "/";

  return (
    <nav className="nav" aria-label="Primary navigation">
      {isHomePage ? (
        <ul className="nav__list">
          <li>
            <Link href="#home" className="nav__link active-link" title="Home">
              <RiHomeLine />
            </Link>
          </li>
          <li>
            <Link href="#projects" className="nav__link" title="Projects">
              <RiFolderLine />
            </Link>
          </li>
          <li>
            <Link href="#services" className="nav__link" title="Services">
              <RiFileEditLine />
            </Link>
          </li>
          <li>
            <Link href="#experience" className="nav__link" title="Experience">
              <RiHonourLine />
            </Link>
          </li>
          <li>
            <Link href="#contact" className="nav__link" title="Contact">
              <RiSendPlaneLine />
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav__list">
          <li>
            <a href="/" className="nav__link active-home-link" title="Home">
              <RiHomeLine />
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavSection;
