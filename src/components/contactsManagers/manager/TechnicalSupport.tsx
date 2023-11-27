import React, { FC } from "react";
import styles from "./Manager.module.scss";
import ManagerContacts from "@/components/managerContacts/ManagerContacts";
import { IManager } from "@/types/manager";
interface Props {
  manager: IManager;
  personalSupport?: boolean;
}
const TechnicalSupport: FC<Props> = ({ manager, personalSupport = false }) => {
  return (
    <div className={styles.supportContainer}>
      <div className={styles.supportProfile}>
        <div className={styles.imgContainer}>
          <img
            src="https://ae04.alicdn.com/kf/Sb72374b6d55c444ba44f64f47e9adb17w.jpg"
            className={styles.supportImg}
          />
        </div>

        <div className={styles.supportData}>
          <div className={styles.supportJobTitle}>Тех. поддержка</div>
          <div className={styles.managerName}>{manager.name}</div>
          <div
            className={`${styles.statusContainer} ${styles.supportStatus} ${
              manager.online && styles.online
            }`}
          >
            <div className={styles.statusIcon}></div>
            <span className={styles.statusTxt}>
              {manager.online ? "В сети" : "Не в сети"}
            </span>
          </div>
        </div>
      </div>
      <ManagerContacts contacts={manager.contacts} personal={personalSupport} />
      {!personalSupport && (
        <p className={styles.txt}>
          Обратитесь в нашу поддержку, если у Вас возникли какие-либо вопросы
          по Вашему заказу, либо Вы не можете собрать и настроить Ваше
          тату-оборудование. Мы поможем.
        </p>
      )}

      {personalSupport && (
        <p className={styles.txt}>
          Понедельник — Пятница
          <br />с 7:00 до 15: 00 (МСК)
        </p>
      )}
    </div>
  );
};

export default TechnicalSupport;
