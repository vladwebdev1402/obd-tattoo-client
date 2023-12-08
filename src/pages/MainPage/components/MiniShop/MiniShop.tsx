import React, { FC, useEffect, useState } from "react";
import styles from "./MiniShop.module.scss";
import MiniShopFooter from "./MiniShopFooter/MiniShopFooter";
import MiniShopHeader from "./MiniShopHeader/MiniShopHeader";
import Slider from "@/components/UI/Slider/Slider";
import ItemsContainer from "@/components/UI/containers/ItemsContainer/ItemsContainer";
import ShopItem from "@/components/ShopItem/ShopItem";
import { ItemStore } from "@/store";
import { observer } from "mobx-react-lite";
const MiniShop: FC = observer(() => {
  const [currentCategory, setCurrentCategory] = useState("news");
  const [swipe, setSwipe] = useState(false);

  useEffect(() => {
    if (currentCategory === "news")
      ItemStore.getItems({ news: true, limit: 8 });
    if (currentCategory === "promotion")
      ItemStore.getItems({ promotion: true, limit: 8 });
    if (currentCategory === "popular")
      ItemStore.getItems({ news: true, limit: 8 });
    if (currentCategory === "hot") ItemStore.getItems({ hot: true, limit: 8 });
  }, [currentCategory]);

  return (
    <section className={styles.miniShopContainer}>
      <MiniShopHeader
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <div className={styles.miniShopSwiper}>
        <Slider
          countPagItem={5}
          st__pagination={styles.swiper__pagination}
          st__pag__item__active={styles.active}
          st__pag__item={styles.swiper__pagination__item}
          onSwipe={setSwipe}
          spaceBetween={20}
          freeMode={true}
          transition={1000}
        >
          {ItemStore.data.map((item) => (
            <ShopItem swipe={swipe} key={item._id} item={item} />
          ))}
        </Slider>
      </div>
      <ItemsContainer className={styles.miniShopItems}>
        {ItemStore.data.map((item) => (
          <ShopItem key={item._id} item={item} />
        ))}
      </ItemsContainer>

      <MiniShopFooter />
    </section>
  );
});

export default MiniShop;
