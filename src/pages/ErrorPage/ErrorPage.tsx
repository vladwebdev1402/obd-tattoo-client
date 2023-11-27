import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeadAndNav from "../../components/headerAndNavbar/HeadAndNav";
import ClipButton from "../../components/UI/button/clipButton/ClipButton";
import LineButton from "../../components/UI/button/lineButton/LineButton";
import styles from "./ErrorPage.module.scss";
const ErrorPage: FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorBody}>
        <div className={styles.errorHeadetTxt}>Ошибка 404!</div>
        <div className={styles.errorDescTxt}>
          Эта страница не найдена, мы уже работаем, чтобы ее восстановить!
        </div>
        <div className={styles.navigationContainer}>
          <div className={styles.clipBtn}>
            <ClipButton
              theme="dark"
              onClick={() => {
                navigate("/tattoo-react");
              }}
            >
              Вернуться на главную
            </ClipButton>
          </div>
          <div className={styles.lineBtn}>
            <LineButton
              onClick={() => {
                navigate("/tattoo-react/catalog");
              }}
            >
              Вернуться в каталог
            </LineButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
