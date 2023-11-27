import React, { FC } from "react";
import styles from "./MySwitch.module.scss";
interface Props {
  active: boolean;
  setState: () => void;
}

const MySwitch: FC<Props> = ({ active, setState }) => {
  return (
    <div
      className={`${styles.switch} ${active && styles.switchActive}`}
      onClick={setState}
    ></div>
  );
};

export default MySwitch;
