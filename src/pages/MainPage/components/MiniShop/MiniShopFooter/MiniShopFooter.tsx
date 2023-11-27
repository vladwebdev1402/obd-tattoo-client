import React, { FC } from "react";
import styles from "./MiniShopFooter.module.scss";
import { useNavigate } from "react-router-dom";
import ClipButton from "../../../../../components/UI/button/clipButton/ClipButton";
const MiniShopFooter: FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.miniShopFooter}>
      <div className={styles.btn}>
        <ClipButton
          theme="light"
          onClick={() => {
            navigate("catalog");
          }}
        >
          Показать ещё
        </ClipButton>
      </div>
    </div>
  );
};

export default MiniShopFooter;
