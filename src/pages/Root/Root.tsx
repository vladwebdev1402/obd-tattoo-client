import React, { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import HeadAndNav from "../../components/headerAndNavbar/HeadAndNav";
import {
  BrandStore,
  CategoryStore,
  CityStore,
  ProfileStore,
  StreetStore,
} from "@/store";

const Root: FC = () => {
  useEffect(() => {
    CategoryStore.getAll();
    BrandStore.getAll();
    CityStore.getAll();
    StreetStore.getAll();
    ProfileStore.getProfile();
  }, []);
  return (
    <>
      <HeadAndNav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
