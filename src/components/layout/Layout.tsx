"use client";

import styled from "styled-components";
import type { ReactNode } from "react";
import Navbar from "@/components/navigation/Navbar";

const Main = styled.main`
  min-height: 100vh;
  width: 100%;
`;

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
