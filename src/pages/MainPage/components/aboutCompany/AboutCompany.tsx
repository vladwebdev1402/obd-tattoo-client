import React, { FC } from "react";
import ClipButton from "../../../../components/UI/button/clipButton/ClipButton";
import styles from "./aboutCompany.module.scss";
import img from "../../../../assets/images/about.png";
const AboutCompany: FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.coontainerImg}>
        <img src={img} />
      </div>

      <div className={styles.aboutInfo}>
        <span className={styles.aboutInfoHead}>Тату магазин Mr. Driskell</span>
        <span className={styles.aboutInfoDesc}>
          Приветствуем вас в Tattoo Mall — в нашем тату магазине собираются
          энтузиасты индустрии, профессиональные мастера и новички, которые
          только делают первые шаги в тату искусстве. Мы знаем, насколько важно
          грамотно и точно подобрать инструменты для продуктивных тату сеансов,
          и помогаем быстро найти то, что поможет их сделать именно такими.
          <br />
          <br />
          В нашем ассортименте не просто тату оборудование, это буквально целая
          команда из грамотных и действительно эффективных помощников на вашем
          рабочем столе. Пройдя этап долгих разработок и бесчисленных тестов
          под пристальным взглядом отечественных машиностроителей, космецевтов
          и брендов с мировым именем, эти товары нарабатывали опыт и каждый день
          становились лучше, чтобы показать, на что они способны, и помочь
          раскрыть ваш потенциал.
        </span>
        <ClipButton className={styles.btn} onClick={() => {}} theme="light">
          О компании
        </ClipButton>
      </div>
    </div>
  );
};

export default AboutCompany;
