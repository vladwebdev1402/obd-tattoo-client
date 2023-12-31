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
import AuthStore from "@/store/AuthStore/AuthStore";
import { observer } from "mobx-react-lite";

const Root: FC = observer(() => {
  useEffect(() => {
    CategoryStore.getAll();
    BrandStore.getAll();
    if (AuthStore.auth) {
      CityStore.getAll();
      StreetStore.getAll();
      ProfileStore.getProfile();
    }
    if (!AuthStore.auth) {
      ProfileStore.clearBasket();
    }
  }, [AuthStore.auth]);
  return (
    <>
      <HeadAndNav />
      <Outlet />
      <Footer />
    </>
  );
});

export default Root;
