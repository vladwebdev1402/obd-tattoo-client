import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import ClipButton from "@UI/button/clipButton/ClipButton";
import LineButton from "@UI/button/lineButton/LineButton";
import st from "./ModalThanksOrder.module.scss";
import ModalView from "@UI/modal/ModalView";
import CloseModal from "@UI/button/closeModal/CloseModal";
import { urls } from "@/clientUrls/clientUrls";
import { OrderStore } from "@/store";
import { observer } from "mobx-react-lite";
interface Props {
  setModal: (value: boolean) => void;
  number: number;
}

const ModalThanksOrder: FC<Props> = observer(({ setModal, number }) => {
  const navigate = useNavigate();
  return (
    <ModalView onClick={() => setModal(false)}>
      <div
        className={st.modalWrapper}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
        }}
      >
        <CloseModal onClick={() => setModal(false)} className={st.closeBtn} />

        <div className={st.head}>Спасибо за заказ!</div>
        <div className={st.numberOrder}>
          Номер вашего заказа: <span className={st.number}>{number}</span>
        </div>
        <div className={st.helpInfo}>
          В ближайшее время с вами свяжется наш менеджер для уточнения деталей
          заказа
        </div>
        <div className={st.navigationContainer}>
          <ClipButton
            onClick={() => {
              setModal(false);
              navigate(urls.main);
            }}
            theme="dark"
            className={st.returnMainbtn}
          >
            <span className={st.btnText}>Вернуться на главную</span>
            <span className={`${st.btnText} ${st.mobileBtnText}`}>
              На главную
            </span>
          </ClipButton>

          <LineButton
            onClick={() => {
              setModal(false);
              navigate(urls.catalog);
            }}
          >
            Вернуться в каталог
          </LineButton>
        </div>
      </div>
    </ModalView>
  );
});

export default ModalThanksOrder;
