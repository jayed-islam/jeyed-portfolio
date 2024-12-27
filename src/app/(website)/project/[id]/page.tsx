import ProjectDetailsView from "@/sections/project/project-details-view";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

const Page = ({ params }: Props) => {
  const { id } = params;
  return <ProjectDetailsView id={id} />;
};

export default Page;
