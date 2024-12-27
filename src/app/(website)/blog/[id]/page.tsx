/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

interface ICategoryProps {
  params: {
    id: string;
  };
}

const Page = ({ params }: ICategoryProps) => {
  const { id } = params;
  return <div>this is blog dynamic page wiht id {id} </div>;
};

export default Page;
