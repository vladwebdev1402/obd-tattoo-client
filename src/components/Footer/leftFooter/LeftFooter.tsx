import React, { FC } from "react";
import styles from "./leftFooter.module.scss";
import logoImg from "@/assets/images/logo.svg";
import { Link } from "react-router-dom";
import { urls } from "@/clientUrls/clientUrls";

const LeftFooter: FC = () => {
  const clickLink = () => {
    window.scrollTo({ top: 100, behavior: "smooth" });
  };

  return (
    <div className={styles.leftFooter}>
      <div className={styles.logo}>
        <Link to={urls.main}>
          <img src={logoImg} alt="logo" />
        </Link>
        <a className={`${styles.link} ${styles.conf}`}>
          Политика конфенедциальности
        </a>
      </div>
      <ul className={styles.menu}>
        <li className={styles.menuLink} onClick={clickLink}>
          <Link to={urls.promocodes} className={styles.link}>
            Промокоды
          </Link>
        </li>
        <li className={styles.menuLink} onClick={clickLink}>
          <Link to={urls.discount} className={styles.link}>
            Скидки
          </Link>
        </li>
        <li className={styles.menuLink} onClick={clickLink}>
          <Link to={urls.help} className={styles.link}>
            Помощь
          </Link>
        </li>
        <li className={styles.menuLink} onClick={clickLink}>
          <Link to={urls.about} className={styles.link}>
            О нас
          </Link>
        </li>
        <li className={styles.menuLink} onClick={clickLink}>
          <Link to={urls.contacts} className={styles.link}>
            Контакты
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftFooter;
