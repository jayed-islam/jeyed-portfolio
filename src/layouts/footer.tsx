import { RiGithubLine, RiLinkedinLine, RiTwitterLine } from "@remixicon/react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container grid">
        <div className="footer__content grid">
          <Link href="/" className="footer__logo">
            Jayed
          </Link>

          <ul className="footer__links">
            <li>
              <Link href="#home" className="footer__link">
                Home
              </Link>
            </li>
            <li>
              <Link href="#project" className="footer__link">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#services" className="footer__link">
                Services
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__social">
          <Link href="" target="_blank" className="footer__social-link">
            <RiLinkedinLine />
          </Link>
          <Link href="" target="_blank" className="footer__social-link">
            <RiGithubLine />
          </Link>
          <Link href="" target="_blank" className="footer__social-link">
            <RiTwitterLine />
          </Link>
        </div>
      </div>

      <span className="footer__copy">&#169; All RIghts Reserved By Jayed</span>
    </footer>
  );
};

export default Footer;
