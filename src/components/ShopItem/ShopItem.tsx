import React, { FC, useState } from "react";
import { IShopItem } from "@/types/entity/shopItem";
import FavoriteItem from "@UI/icons/itemIcons/favoriteIcon/FavoriteItem";
import styles from "./ShopItem.module.scss";
import ClipButton from "@UI/button/clipButton/ClipButton";
import Marcers from "./Marcers/Marcers";
import { useNavigate } from "react-router-dom";
import { urls } from "@/clientUrls/clientUrls";
import AuthStore from "@/store/AuthStore/AuthStore";
import ModalAuth from "../modalAuth/ModalAuth";
import { observer } from "mobx-react-lite";
import { ProfileStore } from "@/store";

interface ShopItemProps {
  item: IShopItem;
  smallItem?: boolean;
  checkbox?: boolean;
  noneBtn?: boolean;
  swipe?: boolean;
}

const ShopItem: FC<ShopItemProps> = observer(
  ({ item, smallItem = false, noneBtn = false, swipe = false }) => {
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();
    const plusBasket = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      ProfileStore.plusItemToBasket(item._id);
    };
    const minusBasket = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      ProfileStore.minusItemBasket(item._id);
    };

    const addBasket = () => {
      if (!AuthStore.auth) setModal(true);
      else ProfileStore.plusItemToBasket(item._id);
    };

    return (
      <div
        className={`${styles.item} ${smallItem && styles.smallItem} ${
          noneBtn && styles.noneBtn
        }`}
      >
        {modal && <ModalAuth setModal={setModal} />}
        <div
          className={styles.itemContainer}
          onClick={() => {
            if (!swipe)
              navigate(urls.catalog + `/${item.category}/${item._id}`);
          }}
        >
          <div className={styles.item__img}>
            <img src={item.image} alt="" draggable={false} />
          </div>
          <div className={styles.itemName}>{item.name}</div>
          <div className={styles.itemPrice}>
            {item.price.toLocaleString("ru-RU")} ₽
            {item.oldPrice > 0 && (
              <span className={styles.oldPrice}>
                {item.oldPrice.toLocaleString("ru-RU")}
              </span>
            )}
          </div>

          <div className={styles.button}>
            {!ProfileStore.checkItemInBasket(item._id) && (
              <ClipButton
                onClick={() => {
                  addBasket();
                }}
                theme="light"
              >
                <span className={styles.addTextDesktop}>
                  Добавить в корзину
                </span>
                <span className={styles.addTextMobile}>В корзину</span>
              </ClipButton>
            )}

            {ProfileStore.checkItemInBasket(item._id) && (
              <div className={styles.basketBtnContainer}>
                <button
                  className={styles.basketBtn}
                  onClick={minusBasket}
                ></button>
                <div className={styles.countInBasket}>
                  <span className={styles.countTxt}>
                    {ProfileStore.getCountItemInBasket(item._id)}шт
                  </span>
                  <span className={styles.infoTxt}>В корзине</span>
                </div>
                <button
                  className={`${styles.basketBtn} ${styles.plus}`}
                  onClick={plusBasket}
                ></button>
              </div>
            )}
          </div>
          <Marcers
            marcers={item.marcers || {}}
            className={smallItem ? styles.marcersSmall : ""}
          />

          <FavoriteItem id={item._id} className={styles.favorite} />
        </div>
      </div>
    );
  }
);

export default ShopItem;
