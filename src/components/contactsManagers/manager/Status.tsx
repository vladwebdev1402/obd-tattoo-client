import React, { FC } from "react";
import styles from "./Manager.module.scss";
interface Props {
  online: boolean;
  className?: string;
}
const Status: FC<Props> = ({ online = false, className = "" }) => {
  return (
    <div
      className={`${styles.statusContainer}  ${
        online && styles.online
      } ${className}`}
    >
      <div className={styles.statusIcon}></div>
      <span className={styles.statusTxt}>
        {online ? "В сети" : "Не в сети"}
      </span>
    </div>
  );
};

export default Status;
