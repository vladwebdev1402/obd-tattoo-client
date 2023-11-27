import React, { FC, useRef } from "react";
import LinkCatalogBody from "./CatalogBody/LinkCatalogBody";
import styles from "./LinkCatalog.module.scss";
import { useClose } from "@/hooks/useClose";
import BurgerIcon from "@UI/icons/headerAndNavIcons/BurgerIcon";
const LinkCatalog: FC = () => {
  const catalogRef = useRef<HTMLDivElement>(null);

  const { isVisible, setIsVisible } = useClose(catalogRef);
  const clickCatalog = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={styles.catalog} onClick={clickCatalog} ref={catalogRef}>
      <span className={styles.catalogTxt}>Каталог</span>
      <BurgerIcon isActive={isVisible} />
      <LinkCatalogBody isVisible={isVisible} />
    </div>
  );
};

export default LinkCatalog;
