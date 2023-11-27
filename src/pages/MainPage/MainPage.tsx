import React, { useEffect, useState } from "react";
import AboutCompany from "./components/aboutCompany/AboutCompany";
import MiniShop from "./components/MiniShop/MiniShop";
import Catalog from "./components/catalog/Catalog";
import Banners from "./components/banners/Banners";
import Brands from "./components/brands/Brands";
import Reviews from "./components/reviews/Reviews";
import HeaderSlider from "./components/HeaderSlider/HeaderSlider";

const MainPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <HeaderSlider />
      <MiniShop />
      <Catalog />
      <Banners />
      <Brands />
      <AboutCompany />
      <Reviews />
    </div>
  );
};

export default MainPage;
