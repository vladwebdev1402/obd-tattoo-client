import React, { FC } from "react";
import ClipButton from "@UI/button/clipButton/ClipButton";
import styles from "./PromocodeItem.module.scss";
import { IPromocode } from "@/types/entity/IPromocode";
interface Props {
  promo: IPromocode;
}

const PromocodeItem: FC<Props> = ({ promo }) => {
  return (
    <div className={styles.promocodeItem}>
      <img src={promo.image} className={styles.promItemImg} />
      <div className={styles.promDescContainer}>
        <div className={styles.promHeaderTxt}>{promo.name}</div>
        <div className={styles.promDesc}>
          {promo.description.split("\\n").map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>

      <div className={styles.btn}>
        <ClipButton
          onClick={() => {
            navigator.clipboard.writeText(promo.promocode);
          }}
          theme="light"
        >
          Скопировать промокод
        </ClipButton>
      </div>
    </div>
  );
};

export default PromocodeItem;
