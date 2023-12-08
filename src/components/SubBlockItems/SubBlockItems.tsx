import React, { FC, useState } from "react";
import { IShopItem } from "@/types/shopItem";
import ShopItem from "@/components/ShopItem/ShopItem";
import Slider from "@UI/Slider/Slider";
import st from "./SubBlockItems.module.scss";
interface Props {
  watchAll: () => void;
  items: IShopItem[];
  title: string;
}
const SubBlockItems: FC<Props> = ({ watchAll, items, title }) => {
  const [swipe, setSwipe] = useState(false);
  return (
    <div className={st.container}>
      <div className={st.header}>
        <h1>{title}</h1>
        <span
          className={st.watchAll}
          onClick={() => {
            watchAll();
          }}
        >
          Смотреть все
        </span>
      </div>
      <div className={st.body}>
        <Slider
          freeMode={true}
          spaceBetween={20}
          st__slider__container={st.sliderContainer}
          st__pag__btn__next={st.btnNext}
          st__pag__btn__prev={st.btnPrev}
          st__pagination={st.pagination}
          st__pag__item={st.pagItem}
          st__pag__item__active={st.pagItemActive}
          countPagItem={5}
          onSwipe={setSwipe}
          transition={1000}
        >
          {items.map((item) => (
            <ShopItem
              swipe={swipe}
              item={item}
              key={item._id}
              smallItem={true}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SubBlockItems;
