import React, { FC } from "react";
import PromocodeItem from "../../components/promocodeItem/PromocodeItem";
import styles from "./PromocodesPage.module.scss";
import { promocodes } from "../../data/promocode";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
const PromocodesPage: FC = () => {
  return (
    <div className={styles.promocodesContainer}>
      <Breadcrumbs className={styles.margin} />
      <h1 className={styles.margin}>Промокоды</h1>
      <div className={styles.promocodesBody}>
        {promocodes.map((promo) => (
          <PromocodeItem key={promo.id} promo={promo} />
        ))}
      </div>
    </div>
  );
};

export default PromocodesPage;
