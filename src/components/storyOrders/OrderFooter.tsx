import React, { FC } from "react";
import LineButton from "@UI/button/lineButton/LineButton";
import st from "./StoryOrders.module.scss";
interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
const OrderFooter: FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <div className={st.footerContainer}>
      <div className="horizontal-divider"></div>
      <LineButton
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={st.clipBtn}
      >
        {!isOpen && <span className={st.lineBtnText}>Подробнее о заказе</span>}
        {isOpen && <span className={st.lineBtnText}>Скрыть информацию</span>}
      </LineButton>
    </div>
  );
};

export default OrderFooter;
