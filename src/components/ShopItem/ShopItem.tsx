import React, { FC, useState } from "react";
import { IShopItem } from "@/types/shopItem";
import FavoriteItem from "@UI/icons/itemIcons/favoriteIcon/FavoriteItem";
import styles from "./ShopItem.module.scss";
import ClipButton from "@UI/button/clipButton/ClipButton";
import Marcers from "./Marcers/Marcers";
import { useNavigate } from "react-router-dom";
import { urls } from "@/clientUrls/clientUrls";

interface ShopItemProps {
  item: IShopItem;
  smallItem?: boolean;
  checkbox?: boolean;
  noneBtn?: boolean;
  swipe?: boolean;
}

const ShopItem: FC<ShopItemProps> = ({
  item,
  smallItem = false,
  noneBtn = false,
  swipe = false,
}) => {
  const [inBasket, setInBasket] = useState(false);
  const navigate = useNavigate();
  const plusBasket = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };
  const minusBasket = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`${styles.item} ${smallItem && styles.smallItem} ${
        noneBtn && styles.noneBtn
      }`}
    >
      <div
        className={styles.itemContainer}
        onClick={() => {
          if (!swipe) navigate(urls.catalog + `/${item.category}/${item._id}`);
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
          {!inBasket && (
            <ClipButton onClick={() => setInBasket(true)} theme="light">
              <span className={styles.addTextDesktop}>Добавить в корзину</span>
              <span className={styles.addTextMobile}>В корзину</span>
            </ClipButton>
          )}

          {inBasket && (
            <div className={styles.basketBtnContainer}>
              <button
                className={styles.basketBtn}
                onClick={minusBasket}
              ></button>
              <div className={styles.countInBasket}>
                <span className={styles.countTxt}>{0}шт</span>
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
};

export default ShopItem;
