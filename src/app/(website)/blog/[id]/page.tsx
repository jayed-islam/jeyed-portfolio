import BlogDetailsView from "@/sections/blog/blog-details-view";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

const Page = ({ params }: Props) => {
  const { id } = params;
  return <BlogDetailsView id={id} />;
};

export default Page;
