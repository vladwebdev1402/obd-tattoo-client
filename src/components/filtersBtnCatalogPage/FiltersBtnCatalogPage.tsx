import React from "react";
import FilterBtn from "@UI/button/filterBtn/FilterBtn";
import styles from "./Filters.module.scss";
const FiltersBtnCatalogPage = () => {
  return (
    <div className={styles.containerFilters}>
      <ul className={styles.filterList}>
        <li className={styles.filter}>
          <FilterBtn>Для начинающих</FilterBtn>
        </li>
        <li className={styles.filter}>
          <FilterBtn>От билдеров</FilterBtn>
        </li>
        <li className={styles.filter}>
          <FilterBtn>Для профессионалов</FilterBtn>
        </li>
        <li className={styles.filter}>
          <FilterBtn>Расходники</FilterBtn>
        </li>
      </ul>
    </div>
  );
};

export default FiltersBtnCatalogPage;
