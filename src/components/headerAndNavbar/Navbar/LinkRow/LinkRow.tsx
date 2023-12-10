import React, { FC } from "react";
import MyLink from "./MyLink";
import styles from "./LinkRow.module.scss";
import { urls } from "@/clientUrls/clientUrls";
const LinkRow: FC = () => {
  return (
    <nav className={styles.linkRow}>
      <ul className={styles.linkList}>
        <li>
          <MyLink name={"Промокоды"} to={urls.promocodes} />
        </li>
        <li>
          <MyLink name={"Скидки"} to={urls.discount} />
        </li>
        <li>
          <MyLink name={"Контакты"} to={urls.contacts} />
        </li>
      </ul>
    </nav>
  );
};

export default LinkRow;
