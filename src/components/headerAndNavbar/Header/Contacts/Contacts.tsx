import React from "react";
import callImg from "@/assets/staticIcons/call.svg";
import mailImg from "@/assets/staticIcons/mail.svg";
import styles from "./Contacts.module.scss";
const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.phone}>
        <div className={styles.number}>
          <div className="icon">
            <img src={callImg} />
          </div>
          <a className={styles.contactText}>+7 952 552-52-52</a>
        </div>
        <ul className={styles.contacsLink}>
          <li className={styles.link}>
            <a className={styles.linkTxt} href="#">
              Viber
            </a>
          </li>
          <li className={styles.link}>
            <a className={styles.linkTxt} href="#">
              Whats App
            </a>
          </li>
          <li className={styles.link}>
            <a className={styles.linkTxt} href="#">
              Telegram
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.mail}>
        <div className="icon">
          <img src={mailImg} />
        </div>
        <a className={styles.contactText}>Mr.Driskell@mail.ru</a>
      </div>
    </div>
  );
};

export default Contacts;
