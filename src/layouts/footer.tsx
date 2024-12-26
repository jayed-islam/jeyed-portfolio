import { socialLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
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
          {socialLinks.map((link, index) => (
            <Link
              href={link.href}
              target="_blank"
              key={index}
              className="footer__social-link"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>

      <span className="footer__copy">&#169; All RIghts Reserved By Jayed</span>
    </footer>
  );
};

export default Footer;
