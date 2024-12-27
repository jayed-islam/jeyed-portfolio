import React, { ReactNode } from "react";
import dynamic from "next/dynamic";

const MainLayout = dynamic(() => import("@/layouts"), { ssr: false });

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return <MainLayout>{children}</MainLayout>;
};

export default Layout;
