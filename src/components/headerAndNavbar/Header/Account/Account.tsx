import React, { useState } from "react";
import styles from "./Account.module.scss";
import { useNavigate } from "react-router-dom";
import ModalAuth from "@/components/modalAuth/ModalAuth";
import Basket from "@UI/icons/headerAndNavIcons/Basket";
import Favorites from "@UI/icons/headerAndNavIcons/Favorites";
import Profile from "@UI/icons/headerAndNavIcons/Profile";

interface Props {
  className?: string;
}
const Account: React.FC<Props> = ({ className }) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  return (
    <div className={`${className} ${styles.account}`}>
      {modal && <ModalAuth setModal={setModal} />}
      <div className={styles.balance}>
        <span className={styles.balanceText}>{0} ₽</span>
        <button
          className={`icon ${styles.iconBtn} ${styles.basket}`}
          onClick={() => {
            navigate("catalog/basket");
          }}
        >
          <Basket />
          {
            <div
              className={`${true && styles.active} ${
                styles.countItemsInBasket
              }`}
            >
              {0}
            </div>
          }
        </button>
      </div>
      <button className={`icon ${styles.iconBtn} ${styles.favorite}`}>
        <Favorites />
      </button>
      <button
        className={`icon ${styles.iconBtn} ${styles.profile}`}
        onClick={() => navigate("profile")}
        // onClick={() => setModal(true)}
      >
        <Profile />
      </button>
    </div>
  );
};

export default Account;
