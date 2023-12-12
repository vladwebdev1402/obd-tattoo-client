import React, { FC } from "react";
import { IProductOrder } from "@/types/entity/orderProduct";
import st from "./StoryOrders.module.scss";
interface Props {
  order: IProductOrder;
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
              <div className={st.dataContainerValue}>{order.numberOrder}</div>
            </div>
            <div className={st.dataInfoContainer}>
              <div className={st.dataContainerHead}>Адрес:</div>
              <div className={st.dataContainerValue}>
                {order.contactPerson.city}, {order.contactPerson.streetAndHouse}
                , кв. {order.contactPerson.apartament}
              </div>
            </div>
            <div className={st.dataInfoContainer}>
              <div className={st.dataContainerHead}>Сумма заказа:</div>
              <div className={st.dataContainerValue}>
                {order.sum.toLocaleString("ru-RU")} ₽
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
                {order.contactPerson.fullName}
              </div>
            </div>
            <div className={st.dataInfoContainer}>
              <div className={st.dataContainerHead}>Телефон</div>
              <div className={st.dataContainerValue}>
                {order.contactPerson.number}
              </div>
            </div>
            <div className={st.dataInfoContainer}>
              <div className={st.dataContainerHead}>Эл. почта</div>
              <div className={st.dataContainerValue}>
                {order.contactPerson.mail}
              </div>
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
