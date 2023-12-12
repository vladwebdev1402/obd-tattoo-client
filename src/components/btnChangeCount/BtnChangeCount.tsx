import React, { FC } from "react";

import { IShopItem } from "@/types/entity/shopItem";
import st from "./btnChangeCount.module.scss";
interface Props {
  className: string;
  count: number;
  plusBasket: () => void;
  minusBasket: () => void;
}
const BtnChangeCount: FC<Props> = ({
  className,
  count,
  plusBasket,
  minusBasket,
}) => {
  return (
    <div className={`${st.container} ${className}`}>
      <div className={st.basketBtn} onClick={minusBasket}></div>
      <div className={st.basketCount}>{count}</div>
      <div className={`${st.basketBtn} ${st.plus}`} onClick={plusBasket}></div>
    </div>
  );
};

export default BtnChangeCount;
