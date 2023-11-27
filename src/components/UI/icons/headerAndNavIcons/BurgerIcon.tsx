import React, { FC } from "react";
import st from "./BurgerIcon.module.scss";

interface Props {
  isActive: boolean;
}

const BurgerIcon: FC<Props> = ({ isActive }) => {
  return (
    <div className={`${isActive ? st.active : ""} ${st.iconContainer}`}>
      <div className={`${st.line} ${st.line1}`}></div>
      <div className={`${st.line} ${st.line2}`}></div>
      <div className={`${st.line} ${st.line3}`}></div>
    </div>
  );
};

export default BurgerIcon;
