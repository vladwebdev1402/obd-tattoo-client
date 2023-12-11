import React, { FC } from "react";
import { IPromocodeItem } from "@/types/entity/promocodeItem";
import ClipButton from "@UI/button/clipButton/ClipButton";
import styles from "./PromocodeItem.module.scss";
interface Props {
  promo: IPromocodeItem;
}

const PromocodeItem: FC<Props> = ({ promo }) => {
  return (
    <div className={styles.promocodeItem}>
      <img src={promo.img} className={styles.promItemImg} />
      <div className={styles.promDescContainer}>
        <div className={styles.promHeaderTxt}>{promo.name}</div>
        <div className={styles.promDesc}>
          {promo.description.split("\n").map((p, idx) => (
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
