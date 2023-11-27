import React, { FC, useState, useEffect } from "react";
import styles from "./Brands.module.scss";
import BrandsBlock from "./brandsBlock/BrandsBlock";
import { useWidth } from "../../../../hooks/useClose";
import { useBrands } from "../../../../hooks/useBrands";
import { ICategory } from "../../../../types/category";
import Slider from "../../../../components/UI/Slider/Slider";
import { brands } from "../../../../data/catalogCategory";

const Brands: FC = () => {
  const width = useWidth();

  const [countInGroup, setCountInGroup] = useState(10);
  const [brand, setBrands] = useState<ICategory[]>(brands.slice(0, 20));
  const groupBrands: Array<Array<ICategory>> = useBrands(brand, countInGroup);

  useEffect(() => {
    if (width <= 1024) {
      setCountInGroup(6);
    } else if (width <= 1400) {
      setCountInGroup(8);
    } else setCountInGroup(10);
  }, [width]);

  return (
    <div className={styles.brandsContainer}>
      <div className={styles.brandsContainerHead}>
        <h1 className={styles.headTxt}>Популярные бренды</h1>
        <h1 className={`${styles.headTxt} ${styles.headTxtMobile}`}>
          Наши бренды
        </h1>
        <a className={styles.brandsLink}>Смотреть все</a>
      </div>
      <div className={styles.brandsContainerBody}>
        <Slider
          spaceBetween={80}
          st__pag__btn__next={`${styles.btnNext} ${styles.btn}`}
          st__pag__btn__prev={`${styles.btnPrev} ${styles.btn}`}
          st__slider__container={`${styles.sliderContainer}`}
        >
          {groupBrands.map((group, idx) => (
            <BrandsBlock brands={group} key={idx} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Brands;
