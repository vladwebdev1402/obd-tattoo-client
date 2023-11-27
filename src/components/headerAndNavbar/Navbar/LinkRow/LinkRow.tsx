import React, { FC } from "react";
import MyLink from "./MyLink";
import styles from "./LinkRow.module.scss";
const LinkRow: FC = () => {
  return (
    <nav className={styles.linkRow}>
      <ul className={styles.linkList}>
        <li>
          <MyLink name={"Промокоды"} to="/tattoo-react/promo" />
        </li>
        <li>
          <MyLink name={"Скидки"} to="/tattoo-react/discount" />
        </li>
        <li>
          <MyLink name={"Контакты"} to="/tattoo-react/contacts" />
        </li>
      </ul>
    </nav>
  );
};

export default LinkRow;
