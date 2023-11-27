import React, { FC } from "react";
import { IProductOrder } from "@/types/orderProduct";
import st from "./StoryOrders.module.scss";

interface Props {
  isOpen: boolean;
  order: IProductOrder;
  setIsOpen: (isOpen: boolean) => void;
}

const OrderHead: FC<Props> = ({ isOpen, setIsOpen, order }) => {
  return (
    <div className={st.containerOrderHead} onClick={() => setIsOpen(!isOpen)}>
      <div className={st.dataContainer}>
        <div className={st.dataContainerHead}>Дата:</div>
        <div className={st.dataContainerValue}>{order.date}</div>
      </div>
      <div className={st.dataContainer}>
        <div className={st.dataContainerHead}>Номер заказа:</div>
        <div className={st.dataContainerValue}>{order.numberOrder}</div>
      </div>
      <div className={st.dataContainer}>
        <div className={st.dataContainerHead}>Кол-во товаров:</div>
        <div className={st.dataContainerValue}>{order.countProduct}</div>
      </div>
      <div className={st.dataContainer}>
        <div className={st.dataContainerHead}>На сумму:</div>
        <div className={st.dataContainerValue}>
          {order.sum.toLocaleString("ru-RU")} ₽
        </div>
      </div>
      <div className={st.dataContainer}>
        <div className={st.dataContainerHead}>Статус:</div>
        <div className={st.dataContainerValue}>{order.status}</div>
      </div>
      <div className={`${st.openIcon} ${isOpen && st.activeIcon}`}></div>
    </div>
  );
};

export default OrderHead;
