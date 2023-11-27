import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CatalogFooter.module.scss";
import ClipButton from "../../../../../components/UI/button/clipButton/ClipButton";
const CatalogFooter: FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.catalogFooterContainer}>
      <div className={styles.btn}>
        <ClipButton
          theme="light"
          onClick={() => {
            navigate("catalog");
          }}
        >
          Смотреть каталог
        </ClipButton>
      </div>
    </div>
  );
};

export default CatalogFooter;
