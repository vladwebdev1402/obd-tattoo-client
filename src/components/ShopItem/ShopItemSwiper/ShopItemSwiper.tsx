import React, { FC } from "react";
import { IItemImg } from "@/types/shopItem";
import Slider from "@UI/Slider/Slider";
import styles from "./ShopItemSwiper.module.scss";
interface Props {
  images: IItemImg;
  className?: string;
}

const ShopItemSwiper: FC<Props> = ({ images, className = "" }) => {
  return (
    <>
      <div className={`${styles.containerSlider}`}>
        <Slider
          st__pagination={styles.slider__pagination}
          st__pag__item={styles.pagination__item}
          st__pag__item__active={styles.active}
        >
          {Object.values(images).map((img, idx) => (
            <img
              key={idx}
              src={img}
              draggable="false"
              className={styles.itemImage}
            />
          ))}
        </Slider>
      </div>
      <div className={`${styles.mobileContainerImg}  ${className}`}>
        <img src={images.img0} />
      </div>
    </>
  );
};

export default ShopItemSwiper;
