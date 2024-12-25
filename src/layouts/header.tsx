import Link from "next/link";
import React from "react";
import {
  RiHomeLine,
  RiFolderLine,
  RiFileEditLine,
  RiHonourLine,
  RiSendPlaneLine,
} from "@remixicon/react";

const NavSection = () => {
  return (
    <nav className="nav">
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
    </nav>
  );
};

export default NavSection;
