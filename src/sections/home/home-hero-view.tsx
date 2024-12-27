"use client";

import Link from "next/link";
import React from "react";
import homeProfile from "../../../public/assets/img/home-perfil.png";
import aboutProfile from "../../../public/assets/img/about-perfil.png";
import Image from "next/image";
import { socialLinks } from "@/constants";
import { useGetSkillsQuery } from "@/redux/reducers/skill/skillApi";

const HomeHeroView = () => {
  const { data, isFetching } = useGetSkillsQuery({ searchTerm: "" });
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
              Jayed <br /> Khan
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
            <Image
              src={aboutProfile}
              alt=""
              className="info__img"
              height={500}
              width={500}
            />
          </div>
          <p className="info__description">
            Passionate about creating and designing websites with the best
            engaging interfaces.
          </p>

          <Link href="#" target="_blank" className="button button__black">
            Download Cv
          </Link>
        </div>

        {/* about */}
        <div className="about">
          <h3 className="about__name">
            Jayed Khan - <b>Full-Stack Developer & Flutter Developer</b>
          </h3>
          <p className="about__description">
            Located in Dhaka, Bangladesh, I have several years of experience in
            web development and flutter development, carrying out several
            successful projects.
          </p>

          <div className="about__social">
            {socialLinks.map((link, index) => (
              <Link
                href={link.href}
                target="_blank"
                key={index}
                className="about__link"
              >
                {link.icon}
              </Link>
            ))}
          </div>

          <div className="about__image">
            <Image
              src={aboutProfile}
              alt=""
              className="about__img"
              height={500}
              width={500}
            />
          </div>

          <p className="about__note">
            He doesn&apos;t write messages on social networks, send me an email
            and I&apos;ll answer you, In-Sha-Allah.
          </p>

          <Link className="button" href="#contact">
            Contact Me
          </Link>
        </div>

        {/* skills */}

        <div className="skills">
          <h2 className="skills__title">Skills</h2>
          <div className="skills__items">
            {/* {skills.map((skill, index) => (
              <div
                key={index}
                className={`skills__item ${
                  skill.alt === "Next.js" || skill.alt === "Prisma"
                    ? "bg-white p-[2px] rounded-sm"
                    : ""
                }`}
              >
                <Image
                  src={skill.src}
                  alt={skill.alt}
                  className="skills__image"
                  height={500}
                  width={500}
                />
              </div>
            ))} */}
            {isFetching
              ? Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="skills__item shimmer bg-gray-100 h-6 w-6 rounded-full animate-pulse"
                  ></div>
                ))
              : data &&
                data?.data?.skills?.map((skill, index) => (
                  <div
                    key={index}
                    className={`skills__item ${
                      skill.name === "Nextjs" || skill.name === "Prisma"
                        ? "bg-white p-[2px] rounded-sm"
                        : ""
                    }`}
                    // className="skills__item"
                  >
                    <Image
                      src={skill.logo}
                      alt={skill.name}
                      className="skills__image"
                      height={500}
                      width={500}
                    />
                  </div>
                ))}
          </div>

          <p className="skills__description">
            Visit the projects section to see the work done with these web
            technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroView;
