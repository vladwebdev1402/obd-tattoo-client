import React, { FC } from "react";
import styles from "./LinkCatalogBody.module.scss";
interface Props {
  name: string;
  isActive: boolean;
  onClick: () => void;
}
const CategoryLink: FC<Props> = ({ name, isActive, onClick }) => {
  return (
    <div
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        onClick();
      }}
      className={`${styles.catalogCategoryLinkBlock} ${
        isActive && styles.active
      }`}
    >
      <span className={styles.catalogCategoryLink}>{name}</span>
      <div className={styles.hoverLine}></div>
    </div>
  );
};

export default CategoryLink;
