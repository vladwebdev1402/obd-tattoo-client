import React, { FC } from "react";
import styles from "./Filter.module.scss";
interface Props {
  children: React.ReactNode;
  name: string;
}
const Filter: FC<Props> = ({ name, children }) => {
  return (
    <div className={styles.filterContainer}>
      <span className={styles.filterName}>{name}</span>
      <div className={styles.filter}>{children}</div>
    </div>
  );
};

export default Filter;
