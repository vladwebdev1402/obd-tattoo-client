import React, { FC } from "react";
import st from "./StoryOrders.module.scss";
import { IOrder } from "@/types/entity/IOrder";
interface Props {
  order: IOrder;
}
const OrderInfo: FC<Props> = ({ order }) => {
  return (
    <div className={st.containerInfo}>
      <div
        className="horizontal-divider"
        style={{ backgroundColor: "var(--gray)" }}
      ></div>
      <div className={st.infoBody}>
        <div className={st.info}>
          <div className={st.headInfoTxt}>Информация о заказе</div>
          <div className={st.dataInfoWrapper}>
            <div className={st.dataInfoContainer}>
              <div className={st.dataContainerHead}>Номер заказа:</div>
              <div className={st.dataContainerValue}>{order.number}</div>
            </div>
            <div className={st.dataInfoContainer}>
              <div className={st.dataContainerHead}>Адрес:</div>
              <div className={st.dataContainerValue}>
                {order.contacts.city.name}, {order.contacts.street.name}, кв.{" "}
                {order.contacts.apartament}
              </div>
            </div>
            <div className={st.dataInfoContainer}>
              <div className={st.dataContainerHead}>Сумма заказа:</div>
              <div className={st.dataContainerValue}>
                {order.allPrice.toLocaleString("ru-RU")} ₽
              </div>
            </div>
          </div>
        </div>
        <div className={st.person}>
          <div className={st.headInfoTxt}>Контактное лицо</div>
          <div className={st.dataInfoWrapper}>
            <div className={st.dataInfoContainer}>
              <div className={st.dataContainerHead}>ФИО</div>
              <div className={st.dataContainerValue}>
                {order.contacts.name} {order.contacts.surname}{" "}
                {order.contacts.patroname}{" "}
              </div>
            </div>
            <div className={st.dataInfoContainer}>
              <div className={st.dataContainerHead}>Телефон</div>
              <div className={st.dataContainerValue}>
                {order.contacts.phone}
              </div>
            </div>
            <div className={st.dataInfoContainer}>
              <div className={st.dataContainerHead}>Эл. почта</div>
              <div className={st.dataContainerValue}>{order.contacts.mail}</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="horizontal-divider"
        style={{ backgroundColor: "var(--gray)" }}
      ></div>
    </div>
  );
};

export default OrderInfo;
