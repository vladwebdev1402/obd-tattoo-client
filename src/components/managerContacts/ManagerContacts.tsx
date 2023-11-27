import React, { FC } from "react";
import styles from "./ManagerContacts.module.scss";
import callImg from "@/assets/staticIcons/darkCall.svg";
import mailImg from "@/assets/staticIcons/darkMail.svg";
import { IManagerContacts } from "@/types/manager";

interface Props {
  contacts: IManagerContacts;
  personal?: boolean;
}
const ManagerContacts: FC<Props> = ({ contacts, personal = false }) => {
  return (
    <div className={styles.contacts}>
      <div className={styles.numberAndUrlContacts}>
        <div className={styles.contactContainer}>
          <div className="icon">
            <img src={callImg} />
          </div>
          <a className={styles.txtNumber}>{contacts.number}</a>
        </div>
        <ul className={styles.urlContacts}>
          <li className={styles.link}>
            <a href={contacts.viber} className={styles.linkTxt}>
              Viber
            </a>
          </li>
          <li className={styles.link}>
            <a href={contacts.whatsapp} className={styles.linkTxt}>
              Whats App
            </a>
          </li>
          <li className={styles.link}>
            <a href={contacts.telegram} className={styles.linkTxt}>
              Telegram
            </a>
          </li>
        </ul>
      </div>
      {personal && (
        <div className={styles.personalContactContainer}>
          <div className={styles.contactContainer}>
            <div className="icon">
              <img src={callImg} />
            </div>
            <a className={styles.companyNumber}>8(800)600-61-91</a>
          </div>
          <div className={styles.callTxt}>(Звонок бесплатный)</div>
        </div>
      )}
      <div className={`${styles.contactContainer} ${styles.mail}`}>
        <div className="icon">
          <img src={mailImg} />
        </div>
        <a className={styles.mailTxt}>{contacts.mail}</a>
      </div>
    </div>
  );
};

export default ManagerContacts;
