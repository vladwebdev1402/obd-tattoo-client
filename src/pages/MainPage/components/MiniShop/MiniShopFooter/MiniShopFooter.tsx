import React, { FC } from "react";
import styles from "./MiniShopFooter.module.scss";
import { useNavigate } from "react-router-dom";
import ClipButton from "../../../../../components/UI/button/clipButton/ClipButton";
import { urls } from "@/clientUrls/clientUrls";
const MiniShopFooter: FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.miniShopFooter}>
      <div className={styles.btn}>
        <ClipButton
          theme="light"
          onClick={() => {
            navigate(urls.catalog);
          }}
        >
          Показать ещё
        </ClipButton>
      </div>
    </div>
  );
};

export default MiniShopFooter;
