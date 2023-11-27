import React, { FC } from "react";
import styles from "./FilterBtn.module.scss";
interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  active?: boolean;
}
const FilterBtn: FC<Props> = ({ children, active = false, ...buttonProps }) => {
  return (
    <button
      {...buttonProps}
      className={`${styles.btn} ${active && styles.active}`}
    >
      {children}
    </button>
  );
};

export default FilterBtn;
