import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LinkCatalogBody.module.scss";
import { ICategory } from "@/types/category";
interface Props {
  items: ICategory[];
  brands: boolean;
}
const CategoryContainer: FC<Props> = ({ items, brands }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.categoryContainer}>
      {items.map((item) => (
        <div
          key={item.id}
          className={styles.category}
          onClick={() => {
            if (brands) navigate(`brands/${item?.id}`);
            else navigate(`catalog/${item?.link}`);
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default CategoryContainer;
