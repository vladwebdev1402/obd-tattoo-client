import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import FilterCategoryCatalog from "../../components/filterCategoryCatalog/FilterCategoryCatalog";
import ShopItem from "../../components/ShopItem/ShopItem";
import st from "./CatalogPage.module.scss";
import ItemsContainer from "../../components/UI/containers/ItemsContainer/ItemsContainer";
import { ItemStore } from "@/store";
import { observer } from "mobx-react-lite";
const CatalogPage = observer(() => {
  const navigate = useNavigate();
  const onClick = (link: string) => {
    navigate(`${link}`);
  };
  useEffect(() => {
    window.scrollTo({ top: 100, behavior: "smooth" });
    ItemStore.getItems();
  }, []);
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
});

export default CatalogPage;
