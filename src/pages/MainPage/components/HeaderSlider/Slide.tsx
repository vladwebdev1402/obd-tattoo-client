import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import ClipButton from "@UI/button/clipButton/ClipButton";
import styles from "./Swiper.module.scss";
import img from "@/assets/images/bg1.png";

const Slide: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.slide}>
      <img src={img} />
      <div className={styles.slideContent}>
        <div className={styles.slideHeader}>
          Лучшие товары в мире татуировок
        </div>
        <div className={styles.slideDesc}>
          Оборудование и расходники для самых ярких и качественных работ
        </div>
        <div className={styles.slideBtn}>
          <ClipButton
            onClick={() => {
              navigate("/tattoo-react/catalog");
            }}
            theme="dark"
          >
            Смотреть каталог
          </ClipButton>
        </div>
      </div>
    </div>
  );
};

export default Slide;
