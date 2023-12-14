import React, { FC, useEffect } from "react";
import PromocodeItem from "../../components/promocodeItem/PromocodeItem";
import styles from "./PromocodesPage.module.scss";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import { observer } from "mobx-react-lite";
import { PromocodeStore } from "@/store";
const PromocodesPage: FC = observer(() => {
  useEffect(() => {
    PromocodeStore.getAll();
  }, []);

  return (
    <div className={styles.promocodesContainer}>
      <Breadcrumbs className={styles.margin} />
      <h1 className={styles.margin}>Промокоды</h1>
      <div className={styles.promocodesBody}>
        {!PromocodeStore.error &&
          PromocodeStore.data.map((promo) => (
            <PromocodeItem key={promo._id} promo={promo} />
          ))}
      </div>
    </div>
  );
});

export default PromocodesPage;
