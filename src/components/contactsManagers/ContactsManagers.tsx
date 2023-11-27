import React from "react";
import styles from "./ContactsManagers.module.scss";
import Manager from "./manager/Manager";
import { managersData } from "@/data/managersData";
const ContactsManagers = () => {
  return (
    <div className={styles.containerManagers}>
      <div className={styles.headTxt}>Менеджеры</div>
      <div className={styles.containerBodyManagers}>
        {managersData.map((manager) => (
          <Manager key={manager.id} manager={manager} />
        ))}
      </div>
    </div>
  );
};

export default ContactsManagers;
