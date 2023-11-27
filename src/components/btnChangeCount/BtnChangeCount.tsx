import React, { FC } from "react";

import { IShopItem } from "@/types/shopItem";
import st from "./btnChangeCount.module.scss";
interface Props {
  item: IShopItem;
  className?: string;
}
const BtnChangeCount: FC<Props> = ({ item, className }) => {
  const plusBasket = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  const minusBasket = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className={`${st.container} ${className}`}>
      <div className={st.basketBtn} onClick={minusBasket}></div>
      <div className={st.basketCount}>{0}</div>
      <div className={`${st.basketBtn} ${st.plus}`} onClick={plusBasket}></div>
    </div>
  );
};

export default BtnChangeCount;
