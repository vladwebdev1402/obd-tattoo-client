import React, { FC } from "react";
import styles from "./MiniShopHeader.module.scss";
import MiniShopHeaderLink from "./MiniShopHeaderLink";
interface Props {
  setCurrentCategory: (category: string) => void;
  currentCategory: string;
}
const MiniShopHeader: FC<Props> = ({ setCurrentCategory, currentCategory }) => {
  return (
    <div className={styles.miniShopHeader}>
      <ul className={styles.linksList}>
        <li>
          <MiniShopHeaderLink
            onClick={() => {
              setCurrentCategory("news");
            }}
            active={currentCategory == "news"}
          >
            Новые поступления
          </MiniShopHeaderLink>
        </li>
        <li>
          <MiniShopHeaderLink
            onClick={() => {
              setCurrentCategory("hot");
            }}
            active={currentCategory == "hot"}
          >
            Хиты продаж
          </MiniShopHeaderLink>
        </li>
        <li>
          <MiniShopHeaderLink
            onClick={() => {
              setCurrentCategory("popular");
            }}
            active={currentCategory == "popular"}
          >
            Самые популярные
          </MiniShopHeaderLink>
        </li>
        <li>
          <MiniShopHeaderLink
            onClick={() => {
              setCurrentCategory("promotion");
            }}
            active={currentCategory == "promotion"}
          >
            Акционные товары
          </MiniShopHeaderLink>
        </li>
      </ul>
    </div>
  );
};

export default MiniShopHeader;
