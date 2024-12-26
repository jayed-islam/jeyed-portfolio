"use client";

import { getSkillImage } from "@/constants";
import { useGetAllProjectsQuery } from "@/redux/reducers/project/projectApi";
import { RiLink } from "@remixicon/react";
import Link from "next/link";
import React from "react";

const HomeProjectsView = () => {
  const { data, isFetching } = useGetAllProjectsQuery({
    searchTerm: "",
  });

  const shimmerArray = Array.from({ length: 3 });
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">RECENT PROJECTS</h2>

      {/* <div className="projects__container container grid">
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
      </div> */}
      <div className="projects__container container grid">
        {isFetching
          ? // Shimmer placeholders
            shimmerArray.map((_, index) => (
              <article
                key={index}
                className="projects__card animate-pulse border border-gray-300 rounded-lg shadow-md"
              >
                <div className="projects__image bg-gray-300 h-40 rounded-t-lg"></div>
                <div className="projects__data p-4">
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-full mb-4"></div>
                  <div className="flex gap-2 mb-4">
                    <div className="projects__skill h-6 w-6 bg-gray-300 rounded-full"></div>
                    <div className="projects__skill h-6 w-6 bg-gray-300 rounded-full"></div>
                    <div className="projects__skill h-6 w-6 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="h-8 bg-gray-300 rounded w-32"></div>
                </div>
              </article>
            ))
          : // Actual projects
            data &&
            data?.data?.projects?.map((project, index) => (
              <article key={index} className="projects__card">
                <Link
                  href={project.liveUrl || ""}
                  className="projects__image"
                  target="_blank"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="projects__img w-full"
                  />
                </Link>

                <div className="projects__data">
                  <h3 className="projects__name">{project.title}</h3>
                  <p className="projects__description">{project.description}</p>

                  {/* <div className="projects__skills">
                    {project.technologies.map((skill, idx) => (
                      <img
                        key={idx}
                        src={skill.icon}
                        alt={skill.name}
                        className="projects__skill"
                      />
                    ))}
                  </div> */}

                  <div className="projects__skills">
                    {project.technologies.map((tech, idx) => (
                      <img
                        key={idx}
                        src={getSkillImage(tech)}
                        alt={tech}
                        className="projects__skill"
                      />
                    ))}
                  </div>

                  <Link
                    href={project.liveUrl || ""}
                    className="projects__button"
                  >
                    <RiLink />
                    <span>Visit Project</span>
                  </Link>
                </div>
              </article>
            ))}
      </div>
    </section>
  );
};

export default HomeProjectsView;
