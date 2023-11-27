import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { pathnames } from "@/data/pathnames";
import styles from "./Breadcrumbs.module.scss";

interface Props {
  params?: boolean;
  nameParams?: string;
  className?: string;
}
const Breadcrumbs: FC<Props> = ({
  params = false,
  nameParams = "",
  className = "",
}) => {
  const location = useLocation().pathname.split("/").slice(2);

  let allPath = "/tattoo-react";

  return (
    <div className={`${styles.breadcrumbsContainer} ${className}`}>
      <ul className={styles.breadcrumbsList}>
        <li className={`${styles.link}`}>
          <Link to="/tattoo-react">
            <span className={styles.linkTxt}>Главная</span>
          </Link>
        </li>

        {location.map((path, idx) => {
          allPath += `/${path}`;
          return (
            <li
              key={idx}
              className={`${styles.link} ${
                idx === location.length - 1 && styles.active
              }`}
            >
              <span className={styles.slash}>/</span>
              <Link to={allPath}>
                <span className={styles.linkTxt}>{pathnames[path]}</span>
              </Link>
            </li>
          );
        })}
        {params && (
          <li className={`${styles.link} ${styles.active}`}>
            <Link to={allPath}>
              <span className={styles.linkTxt}>{nameParams}</span>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
