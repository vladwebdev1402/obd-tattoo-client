import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import FiltersBtnCatalogPage from "../../components/filtersBtnCatalogPage/FiltersBtnCatalogPage";
import styles from "./CatalogPage.module.scss";
import ShopItem from "../../components/ShopItem/ShopItem";
import ClipButton from "../../components/UI/button/clipButton/ClipButton";
import { pathnames } from "../../data/pathnames";
import FilterParametrsItems from "../../components/filterParametrsItems/FilterParametrsItems";
import { useParams } from "react-router-dom";
import { IFiltersParametrs } from "../../types/FilterParametrs";
import { IShopItem } from "../../types/shopItem";
import ItemsContainer from "../../components/UI/containers/ItemsContainer/ItemsContainer";
import { ItemStore } from "@/store";

interface CategoryPage {
  type: string;
  [key: string]: string;
}
const CatalogPage = () => {
  const params = useParams<CategoryPage>();
  const [items, setItems] = useState<IShopItem[]>([]);
  const [filtersItem, setFiltersItem] = useState<IShopItem[]>([]);
  const [filters, setFilters] = useState<IFiltersParametrs>({
    price: { maxPrice: "999999", minPrice: "0" },
    inStock: false,
    sortOptions: [
      { name: "Популярные", isActive: true },
      { name: "По алфавиту", isActive: false },
      { name: "Дешёвые", isActive: false },
      { name: "Дорогие", isActive: false },
    ],
    typeOptions: [
      { name: "Роторные", isActive: true },
      { name: "Индукционные", isActive: false },
    ],
  });

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    const itemsWithFilter = items.filter(
      (item) =>
        item.price <= Number(filters.price.maxPrice) &&
        item.price >= Number(filters.price.minPrice) &&
        (!filters.inStock || (filters.inStock && item.count > 0))
    );
    filters.sortOptions.forEach((filter) => {
      if (filter.isActive) {
        if (filter.name === "Дешёвые")
          setFiltersItem(itemsWithFilter.sort((a, b) => a.price - b.price));
        if (filter.name === "Дорогие")
          setFiltersItem(itemsWithFilter.sort((a, b) => b.price - a.price));
        if (filter.name === "По алфавиту")
          setFiltersItem(
            itemsWithFilter.sort((a, b) => {
              if (a.name > b.name) return 1;
              else return -1;
            })
          );
      }
    });
    setFiltersItem(itemsWithFilter);
  }, [items, filters]);

  return (
    <div className={styles.catalogContainer}>
      <Breadcrumbs />
      <h1>{pathnames[params.type || ""]}</h1>
      <FiltersBtnCatalogPage />
      <FilterParametrsItems filters={filters} setFilters={setFilters} />
      <ItemsContainer
        error={ItemStore.error}
        isLoadingComplete={ItemStore.isLoadingComplete}
      >
        {filtersItem.length ? (
          filtersItem.map((item) => <ShopItem item={item} key={item._id} />)
        ) : (
          <h1>Товары данного типа отсутствуют</h1>
        )}
      </ItemsContainer>

      {items.length !== 0 && (
        <ClipButton
          className={styles.btn}
          theme="light"
          onClick={() => {
            console.log(filtersItem);
          }}
        >
          Показать ещё
        </ClipButton>
      )}
    </div>
  );
};

export default CatalogPage;
