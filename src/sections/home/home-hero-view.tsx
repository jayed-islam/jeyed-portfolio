import Link from "next/link";
import React from "react";
import homeProfile from "../../../public/assets/img/home-perfil.png";
import Image from "next/image";
import {
  RiGithubLine,
  RiLinkedinBoxLine,
  RiTwitterLine,
} from "@remixicon/react";

const HomeHeroView = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        {/* profile */}
        <div className="profile">
          <Image
            src={homeProfile}
            alt=""
            className="profile__img"
            height={500}
            width={500}
          />
          <div className="profile__data">
            <h1 className="profile__name">
              name <br /> Gallers
            </h1>

            <div className="profile__buttons">
              <Link href="#projects" className="button">
                Proects
              </Link>
              <Link href="#services" className="button button__black">
                Services
              </Link>
            </div>
          </div>
        </div>

        {/* info */}

        <div className="info">
          <div className="info__data">
            <div className="info__circle"></div>
            <h1 className="info__name">Jayed Khan</h1>
          </div>
          <div className="info__image">
            <img
              src="assets/img/about-perfil.png"
              alt=""
              className="info__img"
            />
          </div>
          <p className="info__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eos?
          </p>

          <Link href="#" target="_blank" className="button button__black">
            Download Cv
          </Link>
        </div>

        {/* about */}
        <div className="about">
          <h3 className="about__name">Lorem, ipsum dolor. Web Developer</h3>
          <p className="about__description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos ipsam autem at. Odit commodi velit aliquid, nulla dolor
            illum. Provident aut molestias nisi officia ipsam dignissimos eos
            quia ipsa.
          </p>

          <div className="about__social">
            <Link href="*" target="_blank" className="about__link">
              <RiLinkedinBoxLine />
            </Link>
            <Link href="*" target="_blank" className="about__link">
              <RiGithubLine />
            </Link>
            <Link href="*" target="_blank" className="about__link">
              <RiTwitterLine />
            </Link>
          </div>

          <div className="about__image">
            <img
              src="assets/img/about-perfil.png"
              alt=""
              className="about__img"
            />
          </div>

          <p className="about__note">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            assumenda exercitationem! Ab voluptates ratione, voluptatibus sunt
            reiciendis minus fugiat.
          </p>

          <Link className="button" href="#contact">
            Contact Me
          </Link>
        </div>

        {/* slikks */}

        <div className="skills">
          <h2 className="skills__title">Skills</h2>
          <div className="skills__items">
            <img
              src="assets/img/skills-html.svg"
              alt=""
              className="skills__item"
            />
            <img
              src="assets/img/skills-css.svg"
              alt=""
              className="skills__item"
            />
            <img
              src="assets/img/skills-git.svg"
              alt=""
              className="skills__item"
            />
            <img
              src="assets/img/skills-github.svg"
              alt=""
              className="skills__item"
            />
            <img
              src="assets/img/skills-javascript.svg"
              alt=""
              className="skills__item"
            />
            <img
              src="assets/img/skills-photoshop.svg"
              alt=""
              className="skills__item"
            />
            <img
              src="assets/img/skills-react.svg"
              alt=""
              className="skills__item"
            />
            <img
              src="assets/img/skills-tailwind-css.svg"
              alt=""
              className="skills__item"
            />
          </div>

          <p className="skills__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum,
            maiores?
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroView;
