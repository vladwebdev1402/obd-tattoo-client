import React, { FC, useContext } from "react";

import st from "./ContentBasket.module.scss";
import { IShopItem } from "@/types/entity/shopItem";
import BtnChangeCount from "@/components/btnChangeCount/BtnChangeCount";
interface Props {
  item: IShopItem;
  count?: number;
  isOrder: boolean;
}
const BasketRow: FC<Props> = ({ item, isOrder, count }) => {
  const deleteItem = () => {};

  return (
    <div className={st.tableRow}>
      <div className={st.itemImgNameContainer}>
        <div className={st.imgContainer}>
          <img className={st.itemImg} src={item.image} />
        </div>

        <div className={st.itemNameContainer}>
          <span className={`${st.itemTxt} ${st.itemName}`}>{item.name}</span>
          <span className={st.itemPrice}>Цена: {item.price}₽</span>
        </div>
      </div>
      <div className={`${st.itemTxt} ${st.tablePrice}`}>
        {item.price.toLocaleString("ru-RU")}₽
      </div>
      <div className={st.itemTxt}>
        {isOrder ? (
          <>
            <span className={st.hint}>Количество: </span>
            {count}
          </>
        ) : (
          <BtnChangeCount className={st.changeCountBtn} item={item} />
        )}
      </div>
      <div className={st.itemTxt}>
        <span className={st.hint}>Стоимость: </span>
        {isOrder && count
          ? (item.price * count).toLocaleString("ru-RU")
          : (item.price * 0).toLocaleString("ru-RU")}
        ₽
      </div>
      {!isOrder && (
        <button className={st.closeBtn} onClick={deleteItem}></button>
      )}
      <div className={`horizontal-divider ${st.itemDivider}`}></div>
    </div>
  );
};

export default BasketRow;
