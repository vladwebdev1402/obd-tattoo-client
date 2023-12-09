import React, { FC, useState } from "react";
import CategoryContainer from "./CategoryContainer";
import CategoryLink from "./CategoryLink";
import styles from "./LinkCatalogBody.module.scss";
import { BrandStore, CategoryStore } from "@/store";

interface Props {
  isVisible: boolean;
}
const LinkCatalogBody: FC<Props> = ({ isVisible }) => {
  const [isBrands, setIsBrands] = useState<boolean>(false);

  return (
    <div
      className={`${styles.catalogBody} ${isVisible && styles.active} ${
        isBrands && styles.brandsActive
      }`}
    >
      <div className={styles.catalogCategoryLinkContainer}>
        <CategoryLink
          onClick={() => setIsBrands(false)}
          isActive={!isBrands}
          name="По категории"
        />
        <CategoryLink
          onClick={() => setIsBrands(true)}
          isActive={isBrands}
          name="По брендам"
        />
      </div>
      <div className="horizontal-divider"></div>
      <CategoryContainer
        categorys={CategoryStore.data}
        brands={BrandStore.data}
        isBrands={isBrands}
      />
    </div>
  );
};

export default LinkCatalogBody;
