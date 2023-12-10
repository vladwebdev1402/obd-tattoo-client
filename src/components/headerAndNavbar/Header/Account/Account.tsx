import React, { useState } from "react";
import styles from "./Account.module.scss";
import { Link, useNavigate } from "react-router-dom";
import ModalAuth from "@/components/modalAuth/ModalAuth";
import Basket from "@UI/icons/headerAndNavIcons/Basket";
import Favorites from "@UI/icons/headerAndNavIcons/Favorites";
import Profile from "@UI/icons/headerAndNavIcons/Profile";
import { observer } from "mobx-react-lite";
import AuthStore from "@/store/AuthStore/AuthStore";
import { urls } from "@/clientUrls/clientUrls";

interface Props {
  className?: string;
}
const Account: React.FC<Props> = observer(({ className }) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  return (
    <div className={`${className} ${styles.account}`}>
      {AuthStore.auth ? (
        <>
          {modal && <ModalAuth setModal={setModal} />}
          <div className={styles.balance}>
            <span className={styles.balanceText}>{0} ₽</span>
            <button
              className={`icon ${styles.iconBtn} ${styles.basket}`}
              onClick={() => {
                navigate(urls.basket);
              }}
            >
              <Basket />

              <div
                className={`${true && styles.active} ${
                  styles.countItemsInBasket
                }`}
              >
                {0}
              </div>
            </button>
          </div>
          <button
            className={`icon ${styles.iconBtn} ${styles.favorite}`}
            onClick={() => {
              navigate(urls.favorite);
            }}
          >
            <Favorites />
          </button>
          <button
            className={`icon ${styles.iconBtn} ${styles.profile}`}
            onClick={() => navigate(urls.profile)}
            // onClick={() => setModal(true)}
          >
            <Profile />
          </button>
        </>
      ) : (
        <Link to="/tattoo-react/login" className={styles.account__auth}>
          Авторизоваться
        </Link>
      )}
    </div>
  );
});

export default Account;
