/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

interface ICategoryProps {
  params: {
    id: string;
  };
}

const Page = ({ params }: ICategoryProps) => {
  const { id } = params;
  return <div></div>;
};

export default Page;
