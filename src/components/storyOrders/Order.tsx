import React, { FC, useState } from "react";
import ContentBasket from "../contentBasket/ContentBasket";
import OrderFooter from "./OrderFooter";
import OrderHead from "./OrderHead";
import OrderInfo from "./OrderInfo";
import st from "./StoryOrders.module.scss";
import { IOrder } from "@/types/entity/IOrder";
interface Props {
  order: IOrder;
}
const Order: FC<Props> = ({ order }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={st.containerOrder}>
      <OrderHead order={order} isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <OrderInfo order={order} />}

      {isOpen && (
        <div className={st.contentBasketContainer}>
          <div className={st.headerTxtBasket}>Содержимое заказа</div>
          <ContentBasket items={order.basket} isOrder={true} />
        </div>
      )}
      <OrderFooter isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Order;
