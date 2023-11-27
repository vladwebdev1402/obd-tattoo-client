import React, { FC } from "react";
import TechnicalSupport from "../contactsManagers/manager/TechnicalSupport";
import { supportManagerData } from "../../data/managersData";
import styles from "./ContactsOffice.module.scss";

const ContactsOffice: FC = () => {
  return (
    <div className={styles.containerOffice}>
      <div className={styles.headTxt}>Офис компании</div>
      <div className={styles.containerBodyOffice}>
        <div className={styles.bodyOfficeInfo}>
          <p className={styles.number}>8(800)600-61-91</p>
          <p className={`${styles.txt} ${styles.timing}`}>
            Понедельник – пятница: с 07:00 до 15:00 (МСК) <br /> Звонок
            бесплатный!
          </p>
          <ul className={styles.socialNetworks}>
            <li className={styles.link}>
              <a href="#" className={styles.txtLink}>
                Одноклассники
              </a>
            </li>
            <li className={styles.link}>
              <a href="#" className={styles.txtLink}>
                Instagram
              </a>
            </li>
            <li className={styles.link}>
              <a href="#" className={styles.txtLink}>
                Vkontakte
              </a>
            </li>
            <li className={styles.link}>
              <a href="#" className={styles.txtLink}>
                YouTube
              </a>
            </li>
          </ul>
          <div className={styles.tgUrl}>
            <div className={styles.urlContainer}>
              <span className={styles.social}>Telegram: </span>
              <span className={styles.url}>tattoo28_bot</span>
            </div>
            <div className={styles.urlContainer}>
              <span className={styles.social}>Skype: </span>
              <span className={styles.url}>tattoo_28opt.ru</span>
            </div>
          </div>
          <p className={`${styles.txt} ${styles.workingMode}`}>
            Ваши заказы, звонки и обращения обрабатываются в рабочее время. Если
            Вы обратитесь к нам в иное время - мы свяжемся с Вами на следующий
            день. Мы обращаем внимание, в каком часовом поясе Вы находитесь, и
            не звоним в неудобное для Вас время.
          </p>
          <p className={`${styles.txt} ${styles.delivery}`}>
            Пункт выдачи в г. Благовещенске, Калинина 107-202, стоимость
            доставки 300 руб., при оформлении заказа до 15.00 доставка в день
            заказа.
          </p>
          <p className={`${styles.txt} ${styles.nameDelivery}`}>
            ООО «Посылка»
          </p>
          <p className={`${styles.txt} ${styles.nameDelivery}`}>
            ОГРН: 1192036006645
          </p>
        </div>
        <TechnicalSupport manager={supportManagerData[0]} />
      </div>
    </div>
  );
};

export default ContactsOffice;
