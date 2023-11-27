import React, { FC } from "react";
import styles from "./MiniShopHeader.module.scss";

interface CatalogHeaderLinkProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

const MiniShopHeaderLink: FC<CatalogHeaderLinkProps> = ({
  active,
  children,
  onClick,
}) => {
  return (
    <button
      className={`${styles.link} ${active ? styles.active : ""}`}
      onClick={onClick}
    >
      <span className={styles.linkTxt}>{children}</span>
    </button>
  );
};

export default MiniShopHeaderLink;
