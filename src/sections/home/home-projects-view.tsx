import { RiLink } from "@remixicon/react";
import Link from "next/link";
import React from "react";

const HomeProjectsView = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">RECENT PROJECTS</h2>

      <div className="projects__container container grid">
        <article className="projects__card">
          <Link href="" className="projects__image" target="_blank">
            <img
              src="assets/img/projects-1.jpg"
              alt=""
              className="projects__img w-full"
            />
          </Link>

          <div className="projects__data">
            <h3 className="projects__name">Projxt title</h3>
            <p className="projects__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              tenetur officiis beatae dolore natus odit illum nihil eligendi
              expedita rerum.
            </p>

            <div className="projects__skills">
              <img
                src="assets/img/skills-react.svg"
                alt=""
                className="projects__skill"
              />
              <img
                src="assets/img/skills-javascript.svg"
                alt=""
                className="projects__skill"
              />
              <img
                src="assets/img/skills-github.svg"
                alt=""
                className="projects__skill"
              />
            </div>

            <Link href="#" className="projects__button">
              <RiLink />
              <span>Visit Project</span>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default HomeProjectsView;
