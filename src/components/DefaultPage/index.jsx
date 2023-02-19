import React from "react";
import { Outlet } from "react-router-dom";
import { Banner } from "../Banner";

export const DefaultPage = ({ children }) => {
  return (
    <main>
      <Banner />
      <Outlet />
      {children}
    </main>
  );
};
