import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import styles from "./CatalogPage.module.scss";
import ShopItem from "../../components/ShopItem/ShopItem";
import ClipButton from "../../components/UI/button/clipButton/ClipButton";
import FilterParametrsItems from "../../components/filterParametrsItems/FilterParametrsItems";
import { useParams } from "react-router-dom";
import { IFiltersParametrs } from "../../types/entity/FilterParametrs";
import ItemsContainer from "../../components/UI/containers/ItemsContainer/ItemsContainer";
import { CategoryStore, ItemStore } from "@/store";
import { observer } from "mobx-react-lite";
import { IItemParams } from "@/types/api/itemParamsApi";

interface CategoryPage {
  id: string;
  [key: string]: string;
}
const CatalogPage = observer(() => {
  const params = useParams<CategoryPage>();
  const category = CategoryStore.data.filter((c) => c._id === params.id)[0]
    ? CategoryStore.data.filter((c) => c._id === params.id)[0].name
    : "";
  const [filters, setFilters] = useState<IFiltersParametrs>({
    price: { maxPrice: "999999", minPrice: "0" },
    inStock: false,
    sortOptions: [
      { name: "Популярные", isActive: true },
      { name: "По алфавиту", isActive: false },
      { name: "Дешёвые", isActive: false },
      { name: "Дорогие", isActive: false },
    ],
  });

  useEffect(() => {
    window.scrollTo({ top: 0 });
    const query: IItemParams = {
      category: params.id,
    };

    ItemStore.getItems(query);
  }, []);

  useEffect(() => {
    const query: IItemParams = {
      category: params.id,
      startPrice: Number(filters.price.minPrice),
      endPrice: Number(filters.price.maxPrice),
    };

    if (filters.inStock) query.no = false;

    ItemStore.getItems(query, true);
  }, [filters.price, filters.inStock, params]);

  return (
    <div className={styles.catalogContainer}>
      <Breadcrumbs params={[category]} />
      <h1>{category}</h1>
      <FilterParametrsItems filters={filters} setFilters={setFilters} />
      <ItemsContainer
        error={ItemStore.error}
        isLoadingComplete={ItemStore.isLoadingComplete}
      >
        {ItemStore.getItemsWithFilter(filters.sortOptions).map((item) => (
          <ShopItem key={item._id} item={item} />
        ))}
      </ItemsContainer>

      {ItemStore.data.length !== 0 && ItemStore.data.length % 8 === 0 && (
        <ClipButton onClick={() => {}} className={styles.btn} theme="light">
          Показать ещё
        </ClipButton>
      )}
    </div>
  );
});

export default CatalogPage;
