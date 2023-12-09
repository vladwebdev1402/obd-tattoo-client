import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import FilterCategoryCatalog from "../../components/filterCategoryCatalog/FilterCategoryCatalog";
import ShopItem from "../../components/ShopItem/ShopItem";
import st from "./CatalogPage.module.scss";
import ItemsContainer from "../../components/UI/containers/ItemsContainer/ItemsContainer";
import { ItemStore } from "@/store";
const CatalogPage = () => {
  const navigate = useNavigate();
  const onClick = (link: string) => {
    navigate(`${link}`);
  };
  useEffect(() => {
    window.scrollTo({ top: 100, behavior: "smooth" });
  });
  return (
    <div className={st.container}>
      <Breadcrumbs />
      <FilterCategoryCatalog navigate={onClick} />
      <ItemsContainer
        error={ItemStore.error}
        isLoadingComplete={ItemStore.isLoadingComplete}
      >
        {ItemStore.data.map((item) => (
          <ShopItem item={item} key={item._id} />
        ))}
      </ItemsContainer>
    </div>
  );
};

export default CatalogPage;
