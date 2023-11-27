import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import HeadAndNav from "../../components/headerAndNavbar/HeadAndNav";

const Root: FC = () => {
  return (
    <>
      <HeadAndNav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
