import React from "react";
import Account from "./Account/Account";
import Contacts from "./Contacts/Contacts";
import styles from "./Header.module.scss";
import logoImg from "@/assets/images/logo.svg";
import { Link } from "react-router-dom";
import { urls } from "@/clientUrls/clientUrls";
const Header: React.FC = () => {
  return (
    <div className={styles.up}>
      <Contacts />
      <Link className={styles.logo} to={urls.main}>
        <img src={logoImg} alt="logo" />
      </Link>
      <Account />
    </div>
  );
};

export default Header;
