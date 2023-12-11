import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import FilterCategoryCatalog from "@/components/filterCategoryCatalog/FilterCategoryCatalog";
import ShopItem from "@/components/ShopItem/ShopItem";
import ClipButton from "@/components/UI/button/clipButton/ClipButton";
import st from "./BrandPage.module.scss";
import ItemsContainer from "@/components/UI/containers/ItemsContainer/ItemsContainer";
import BrandImgHeader from "./components/brandImgHeader/BrandImgHeader";
import { BrandStore, ItemStore } from "@/store";
import { observer } from "mobx-react-lite";
import { IItemParams } from "@/types/itemParamsApi";
const BrandPage = observer(() => {
  const params = useParams<{ id: string }>();
  const brand = BrandStore.data.filter((b) => b._id === params.id)[0];
  const [currentType, setCurrentType] = useState("all");

  useEffect(() => {
    window.scrollTo({ top: 120, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const query: IItemParams = {};
    if (currentType !== "all") query.category = currentType;
    if (BrandStore.isLoadingComplete)
      ItemStore.getItems({ ...query, brand: brand._id });
  }, [BrandStore.isLoadingComplete, params, currentType]);

  return (
    <div className={st.container}>
      <Breadcrumbs params={[brand?.name]} />
      {BrandStore.isLoadingComplete && (
        <BrandImgHeader img={brand.image} name={brand?.name || ""} />
      )}
      <FilterCategoryCatalog
        setType={setCurrentType}
        currentType={currentType}
        all={true}
      />
      <ItemsContainer
        error={ItemStore.error}
        isLoadingComplete={ItemStore.isLoadingComplete}
      >
        {ItemStore.data.length ? (
          ItemStore.data.map((item) => <ShopItem item={item} key={item._id} />)
        ) : (
          <h1>Товары этой категории от данного бренда отсутствуют</h1>
        )}
      </ItemsContainer>

      {ItemStore.data.length > 0 && ItemStore.data.length % 8 == 0 && (
        <ClipButton theme="light" onClick={() => {}} className={st.btn}>
          Показать ещё
        </ClipButton>
      )}
    </div>
  );
});

export default BrandPage;
