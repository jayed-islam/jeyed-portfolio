"use client";

import { useGetBlogByIdQuery } from "@/redux/reducers/blog/blogApi";
import { IBlog } from "@/types/blog";
import Image from "next/image";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface Props {
  id: string;
}

const BlogDetailsView = ({ id }: Props) => {
  const { data, isLoading, isError } = useGetBlogByIdQuery(id);

  const project = data?.data as IBlog | undefined;
  const { title, description, content, banner, createdAt } = project || {};

  const formatDate = (date: string | undefined) => {
    return date
      ? new Date(date).toLocaleDateString("en-US", { dateStyle: "medium" })
      : "N/A";
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-80">
        <p className="section__title">Loading blog details...</p>
      </div>
    );
  }

  if (isError || !project) {
    return (
      <div className="flex justify-center items-center h-80">
        <p className="text-red-500 text-2xl">
          Failed to load blog details. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <section className="section py-10 px-5 md:px-10 lg:px-20">
      <div className="container">
        <h1 className="section__title mb-8 max-w-2xl mx-auto">{title}</h1>

        <div className="flex flex-col gap-9">
          <div className="h-60 md:h-80 lg:h-96 w-full border">
            <Image
              src={banner || "/placeholder.png"}
              alt={title || "Project Image"}
              className="rounded-lg shadow-md w-full h-full object-contain"
              height={600}
              width={800}
            />
          </div>

          <div className="w-full">
            <h2 className="text-xl font-medium text-white mb-4">
              About the Blog
            </h2>
            <div className="mb-6">
              <p>
                <span className="font-medium text-gray-600">Write Date:</span>{" "}
                {formatDate(createdAt as string)}
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3 overflow-ellipsis">
              {description || "No description available."}
            </p>

            <ReactQuill
              value={content}
              readOnly={true}
              theme="bubble"
              className="p-0 m-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsView;
