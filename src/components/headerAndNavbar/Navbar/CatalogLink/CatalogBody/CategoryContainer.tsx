import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LinkCatalogBody.module.scss";
import { ICategory } from "@/types/ICategory";
import { observer } from "mobx-react-lite";
interface Props {
  // items: ICategory[];
  categorys: ICategory[];
  brands: boolean;
}
const CategoryContainer: FC<Props> = observer(({ categorys, brands }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.categoryContainer}>
      {categorys.map((item) => (
        <div
          key={item._id}
          className={styles.category}
          onClick={() => {
            // if (brands) navigate(`brands/${item?.id}`);
            navigate(`catalog/${item?._id}`);
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
});

export default CategoryContainer;
