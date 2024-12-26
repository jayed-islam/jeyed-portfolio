"use client";

import { useGetBlogsQuery } from "@/redux/reducers/blog/blogApi";
import { RiLink } from "@remixicon/react";
import Link from "next/link";
import React from "react";

const HomeBlogView = () => {
  const { data, isFetching } = useGetBlogsQuery({
    searchTerm: "",
  });

  const shimmerArray = Array.from({ length: 3 });
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">BLOGS</h2>

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
            data?.data?.blogs?.map((blog, index) => (
              <article key={index} className="projects__card">
                <Link
                  href={`/blog/${blog._id}`}
                  className="projects__image"
                  target="_blank"
                >
                  <img
                    src={blog.banner}
                    alt={blog.title}
                    className="projects__img w-full"
                  />
                </Link>

                <div className="projects__data">
                  <h3 className="projects__name">{blog.title}</h3>
                  <p className="projects__description">{blog.description}</p>

                  <Link href={`/blog/${blog._id}`} className="projects__button">
                    <RiLink />
                    <span>Visit Blog</span>
                  </Link>
                </div>
              </article>
            ))}
      </div>
    </section>
  );
};

export default HomeBlogView;
