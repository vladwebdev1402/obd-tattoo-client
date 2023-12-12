import React, { FC } from "react";
import BasketRow from "./BasketRow";
import st from "./ContentBasket.module.scss";
import { IBasketItem } from "@/types/entity/IBasketItem";

interface Props {
  items: IBasketItem[];
  isOrder?: boolean;
  className?: string;
}

const ContentBasket: FC<Props> = ({ items, isOrder = false, className }) => {
  return (
    <div className={`${st.container} ${className}`}>
      <div className={st.tableContainer}>
        <div className={st.tableHeader}>
          <span>Наименование</span>
          <span className={st.tableHeadTxt}>Цена</span>
          <span className={st.tableHeadTxt}>Количество</span>
          <span className={st.tableHeadTxt}>Стоимость</span>
        </div>
        <div className={`horizontal-divider ${st.divider}`}></div>
        {items.length ? (
          items.map(({ item, count }, idx) => (
            <BasketRow key={item} itemId={item} isOrder={isOrder} />
          ))
        ) : (
          <>Корзина пуста</>
        )}
      </div>
    </div>
  );
};

export default ContentBasket;
