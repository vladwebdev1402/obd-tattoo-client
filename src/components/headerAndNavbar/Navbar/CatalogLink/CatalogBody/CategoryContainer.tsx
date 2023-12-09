import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LinkCatalogBody.module.scss";
import { ICategory } from "@/types/ICategory";
import { observer } from "mobx-react-lite";
import { IBrand } from "@/types/IBrand";
interface Props {
  // items: ICategory[];
  categorys: ICategory[];
  brands: IBrand[];
  isBrands: boolean;
}
const CategoryContainer: FC<Props> = observer(
  ({ categorys, brands, isBrands }) => {
    const navigate = useNavigate();
    return (
      <div className={styles.categoryContainer}>
        {!isBrands &&
          categorys.map((item) => (
            <div
              key={item._id}
              className={styles.category}
              onClick={() => {
                navigate(`catalog/${item?._id}`);
              }}
            >
              {item.name}
            </div>
          ))}
        {isBrands &&
          brands.map((item) => (
            <div
              key={item._id}
              className={styles.category}
              onClick={() => {
                navigate(`brands/${item?._id}`);
              }}
            >
              {item.name}
            </div>
          ))}
      </div>
    );
  }
);

export default CategoryContainer;
