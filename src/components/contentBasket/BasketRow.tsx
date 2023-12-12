import React, { FC, useState, useEffect } from "react";

import st from "./ContentBasket.module.scss";
import BtnChangeCount from "@/components/btnChangeCount/BtnChangeCount";
import { IShopItem } from "@/types/entity/shopItem";
import { ItemApi } from "@/api";
import { observer } from "mobx-react-lite";
import { ProfileStore } from "@/store";

interface Props {
  itemId: string;
  count?: number;
  item?: IShopItem;
  isOrder: boolean;
}
const BasketRow: FC<Props> = observer(
  ({ itemId, item = null, isOrder, count }) => {
    const [bItem, setItem] = useState(item || null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const getItem = async () => {
      try {
        const currItem = (await ItemApi.getItemById(itemId)).data[0];
        setItem(currItem);
      } catch {
        setError(error);
      } finally {
        setIsLoading(true);
      }
    };

    useEffect(() => {
      if (item === null) getItem();
      else setIsLoading(true);
    }, []);

    return (
      <div className={st.tableRow}>
        {isLoading && bItem !== null && (
          <>
            <div className={st.itemImgNameContainer}>
              <div className={st.imgContainer}>
                <img className={st.itemImg} src={bItem.image} />
              </div>

              <div className={st.itemNameContainer}>
                <span className={`${st.itemTxt} ${st.itemName}`}>
                  {bItem.name}
                </span>
                <span className={st.itemPrice}>Цена: {bItem.price}₽</span>
              </div>
            </div>
            <div className={`${st.itemTxt} ${st.tablePrice}`}>
              {bItem.price.toLocaleString("ru-RU")}₽
            </div>
            <div className={st.itemTxt}>
              {isOrder ? (
                <>
                  <span className={st.hint}>Количество: </span>
                  {count}
                </>
              ) : (
                <BtnChangeCount
                  minusBasket={() => ProfileStore.minusItemBasket(itemId)}
                  plusBasket={() => ProfileStore.plusItemToBasket(itemId)}
                  count={ProfileStore.getCountItemInBasket(itemId)}
                  className={st.changeCountBtn}
                />
              )}
            </div>
            <div className={st.itemTxt}>
              <span className={st.hint}>Стоимость: </span>
              {isOrder && count
                ? (bItem.price * count).toLocaleString("ru-RU")
                : (bItem.price * 0).toLocaleString("ru-RU")}
              ₽
            </div>
            {!isOrder && (
              <button
                className={st.closeBtn}
                onClick={() => ProfileStore.setItemBasket(itemId, 0)}
              ></button>
            )}
            <div className={`horizontal-divider ${st.itemDivider}`}></div>
          </>
        )}
      </div>
    );
  }
);

export default BasketRow;
