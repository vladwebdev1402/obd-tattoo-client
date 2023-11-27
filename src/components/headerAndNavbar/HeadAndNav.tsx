import React, { FC, useState, useEffect } from "react";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import styles from "./HeadAndNav.module.scss";

const HeadAndNav: FC = () => {
  return (
    <header className={styles.headContainer}>
      <div className={styles.head}>
        <Header />
        <div className={`${styles.divider} horizontal-divider`}></div>
        <Navbar />
      </div>
    </header>
  );
};

export default HeadAndNav;
