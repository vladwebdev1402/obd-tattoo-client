import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./BurgerMenu.module.scss";
import MyLink from "../LinkRow/MyLink";
import Search from "../Seacrh/Search";
import { useStopScroll } from "@/hooks/useStopScroll";
import BurgerIcon from "@UI/icons/headerAndNavIcons/BurgerIcon";
import { category } from "@/data/catalogCategory";
import RightFooter from "@/components/Footer/RightFooter/RightFooter";
const BurgerMenu: FC = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const [isActiveCatalog, setIsActiveCatalog] = useState(false);
  const clickMenu = () => {
    setIsActiveMenu(!isActiveMenu);
  };

  useStopScroll(isActiveMenu);
  return (
    <>
      <div className={styles.burgerMenu}>
        <span className={styles.catalogTxt} onClick={clickMenu}>
          Меню
        </span>
        <BurgerIcon isActive={isActiveMenu} />
      </div>
      <div className={`${styles.menuBody} ${isActiveMenu && styles.active}`}>
        <div className={styles.dividerWrapper}>
          <div className={`horizontal-divider`}></div>
        </div>

        <div className={styles.burgerMenuNav}>
          <div
            className={`${styles.catalogContainer} ${
              isActiveCatalog && styles.activeCatalog
            }`}
            onClick={() => {
              setIsActiveCatalog(!isActiveCatalog);
            }}
          >
            <span className={`${styles.headCategory} ${styles.catalog}`}>
              Каталог
            </span>
            <div className={styles.categorys}>
              <div className={styles.verticalDividerWrapper}>
                <div className="vertical-divider"></div>
              </div>

              <div className={styles.categorysBody}>
                {category.map((category) => (
                  <Link
                    key={category.id}
                    to={`/tattoo-react/catalog/${category.link}`}
                    className={styles.linkCategory}
                    onClick={() => {
                      setIsActiveMenu(!isActiveMenu);
                    }}
                  >
                    <span className={styles.linkTxt}>{category.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <nav
            onClick={() => {
              setIsActiveMenu(!isActiveMenu);
            }}
          >
            <ul className={styles.linkColumn}>
              <li className={styles.linkLi}>
                <MyLink name={"Промокоды"} to="/tattoo-react/promo" />
              </li>
              <li className={styles.linkLi}>
                <MyLink name={"Скидки"} to="/tattoo-react/discount" />
              </li>
              <li className={styles.linkLi}>
                <MyLink name={"Помощь"} to="/tattoo-react/help" />
              </li>
              <li className={styles.linkLi}>
                <MyLink name={"О нас"} to="/tattoo-react/about" />
              </li>
              <li className={styles.linkLi}>
                <MyLink name={"Контакты"} to="/tattoo-react/contacts" />
              </li>
              <li className={styles.linkLi}>
                <MyLink name={"Избранное"} to="/tattoo-react/favorite" />
              </li>
              <li className={styles.linkLi}>
                <MyLink name={"Личный кабинет"} to="/tattoo-react/profile" />
              </li>
            </ul>
          </nav>
          <div className={styles.inputContainer}>
            <Search />
          </div>
        </div>

        <div className={styles.dividerWrapper}>
          <div className={`horizontal-divider`}></div>
        </div>
        <div className={styles.footerContainer}>
          <RightFooter />
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
