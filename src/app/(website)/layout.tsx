import MainLayout from "@/layouts";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return <MainLayout>{children}</MainLayout>;
};

export default Layout;
