"use client";

import { getSkillImage } from "@/constants";
import { useGetSingleProjectQuery } from "@/redux/reducers/project/projectApi";
import { IProject } from "@/types/projects";
import { RiLink } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  id: string;
}

const ProjectDetailsView = ({ id }: Props) => {
  const { data, isLoading, isError } = useGetSingleProjectQuery(id);

  const project = data?.data as IProject | undefined;
  const {
    title,
    description,
    image,
    technologies,
    liveUrl,
    backendRepoUrl,
    frontendRepoUrl,
    infos,
    endDate,
    startDate,
    status,
  } = project || {};

  const formatDate = (date: string | undefined) => {
    return date
      ? new Date(date).toLocaleDateString("en-US", { dateStyle: "medium" })
      : "N/A";
  };

  const statusColors: { [key: string]: string } = {
    completed: "bg-green-500 text-white",
    ongoing: "bg-yellow-500 text-white",
    pending: "bg-gray-500 text-white",
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-80">
        <p className="section__title">Loading project details...</p>
      </div>
    );
  }

  if (isError || !project) {
    return (
      <div className="flex justify-center items-center h-80">
        <p className="text-red-500 text-2xl">
          Failed to load project details. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <section className="section py-10 px-5 md:px-10 lg:px-20">
      <div className="container">
        <h1 className="section__title mb-8">{title}</h1>

        <div className="project__content flex flex-col lg:flex-row gap-8 items-start">
          {/* Project Image */}
          <div className="project__image h-60 md:h-80 lg:h-96 w-full border">
            <Image
              src={image || "/placeholder.png"}
              alt={title || "Project Image"}
              className="rounded-lg shadow-md w-full h-full object-contain"
              height={600}
              width={800}
            />
          </div>

          {/* Project Details */}
          <div className="w-full">
            <h2 className="text-xl font-medium text-white mb-4">
              About the Project
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3 overflow-ellipsis">
              {description || "No description available."}
            </p>

            <div>
              <div className="timeline text-gray-600 mb-6">
                <p>
                  <span className="font-medium">Start Date:</span>{" "}
                  {formatDate(startDate as string)}
                </p>
                <p>
                  <span className="font-medium">End Date:</span>{" "}
                  {formatDate(endDate)}
                </p>
              </div>

              <div className="flex items-center gap-5 mb-6">
                <h3 className="text-lg font-medium text-gray-700">
                  Project Status:
                </h3>
                <div
                  className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                    statusColors[status?.toLowerCase() || "pending"] ||
                    "bg-gray-500 text-white"
                  } `}
                >
                  {status || "Pending"}
                </div>
              </div>
            </div>

            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Technologies Used:
            </h3>
            <div className="flex flex-wrap gap-4 mb-8">
              {technologies && technologies.length > 0 ? (
                technologies.map((tech, idx) => {
                  const skillImage = getSkillImage(tech);
                  return (
                    <Image
                      key={idx}
                      src={skillImage || "/placeholder-skill.png"}
                      alt={tech || "Technology"}
                      className="h-7 w-auto"
                      height={48}
                      width={48}
                    />
                  );
                })
              ) : (
                <p className="text-gray-500">No technologies listed.</p>
              )}
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Live Urls:
              </h3>
              <div className="flex flex-col gap-3">
                <Link href={liveUrl || "#"} className="projects__button">
                  <RiLink />
                  <span>Live Url</span>
                </Link>
                <Link
                  href={frontendRepoUrl || "#"}
                  className="projects__button"
                >
                  <RiLink />
                  <span>Frontend Repo Url</span>
                </Link>
                <Link href={backendRepoUrl || "#"} className="projects__button">
                  <RiLink />
                  <span>Backend Repo Url</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-11">
          <h2 className="text-xl font-medium text-white mb-4">
            About the Project
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            {description || "No description available."}
          </p>

          <h3 className="text-lg font-medium text-white mb-2">
            Technologies Used:
          </h3>
          <div className="flex flex-col gap-3 mt-5 lg:pl-5">
            {infos?.map((item, idx) => (
              <li key={idx} className="experience__description">
                {item}
              </li>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsView;
