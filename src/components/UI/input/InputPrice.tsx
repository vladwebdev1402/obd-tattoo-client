import React, { FC } from "react";
import styles from "./InputPrice.module.scss";
interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputPrice: FC<Props> = ({ value, onChange }) => {
  return (
    <input
      className={styles.inputPrice}
      value={Number(value).toLocaleString("ru-RU")}
      onChange={onChange}
    />
  );
};

export default InputPrice;
