import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { pathnames } from "@/data/pathnames";
import styles from "./Breadcrumbs.module.scss";
import Breadcrumb from "./Breadcrumb";

interface Props {
  params?: string[];
  className?: string;
}
const Breadcrumbs: FC<Props> = ({ params = [], className = "" }) => {
  const location = useLocation().pathname.split("/").slice(2);
  const locationLength = location.length;
  const startIdx = locationLength - params.length;

  let allPath = "/tattoo-react";

  return (
    <div className={`${styles.breadcrumbsContainer} ${className}`}>
      <ul className={styles.breadcrumbsList}>
        <Breadcrumb to={"/tattoo-react"} slash={false}>
          Главная
        </Breadcrumb>

        {location.slice(0, locationLength - params.length).map((path, idx) => {
          allPath += `/${path}`;
          return (
            <Breadcrumb
              key={allPath}
              to={allPath}
              active={idx === location.length - 1}
            >
              {pathnames[path]}
            </Breadcrumb>
          );
        })}
        {params.length > 0 &&
          params.map((path, idx) => {
            allPath += `/${location[startIdx + idx]}`;
            return (
              <Breadcrumb
                key={allPath}
                to={allPath}
                active={startIdx + idx === location.length - 1}
              >
                {path}
              </Breadcrumb>
            );
          })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
