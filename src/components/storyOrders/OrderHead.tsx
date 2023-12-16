import React, { FC } from "react";
import st from "./StoryOrders.module.scss";
import { IOrder } from "@/types/entity/IOrder";

interface Props {
  isOpen: boolean;
  order: IOrder;
  setIsOpen: (isOpen: boolean) => void;
}

const OrderHead: FC<Props> = ({ isOpen, setIsOpen, order }) => {
  return (
    <div className={st.containerOrderHead} onClick={() => setIsOpen(!isOpen)}>
      <div className={st.dataContainer}>
        <div className={st.dataContainerHead}>Дата:</div>
        <div className={st.dataContainerValue}>
          {new Date(order.date).toLocaleDateString("ru")}
        </div>
      </div>
      <div className={st.dataContainer}>
        <div className={st.dataContainerHead}>Номер заказа:</div>
        <div className={st.dataContainerValue}>{order.number}</div>
      </div>
      <div className={st.dataContainer}>
        <div className={st.dataContainerHead}>Кол-во товаров:</div>
        <div className={st.dataContainerValue}>{order.countItems}</div>
      </div>
      <div className={st.dataContainer}>
        <div className={st.dataContainerHead}>На сумму:</div>
        <div className={st.dataContainerValue}>
          {order.allPrice.toLocaleString("ru-RU")} ₽
        </div>
      </div>
      <div className={st.dataContainer}>
        <div className={st.dataContainerHead}>Статус:</div>
        <div className={st.dataContainerValue}>{order.status.name}</div>
      </div>
      <div className={`${st.openIcon} ${isOpen && st.activeIcon}`}></div>
    </div>
  );
};

export default OrderHead;
