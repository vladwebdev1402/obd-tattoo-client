import React, { FC } from "react";
import styles from "./Breadcrumbs.module.scss";
import { Link } from "react-router-dom";
interface Props {
  children: React.ReactNode;
  to: string;
  active?: boolean;
  slash?: boolean;
}

const Breadcrumb: FC<Props> = ({
  children,
  to,
  active = false,
  slash = true,
}) => {
  return (
    <li className={`${styles.link} ${active ? styles.active : ""}`}>
      {slash && <span className={styles.slash}>/</span>}
      <Link to={to}>
        <span className={styles.linkTxt}>{children}</span>
      </Link>
    </li>
  );
};

export default Breadcrumb;
