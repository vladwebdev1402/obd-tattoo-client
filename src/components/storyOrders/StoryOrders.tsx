import React from "react";
import Order from "./Order";
import st from "./StoryOrders.module.scss";
import { ordersData } from "@/data/orders";
const StoryOrders = () => {
  return (
    <div className={st.container}>
      <div className={st.headTxt}>История заказов</div>
      {ordersData.map((order) => (
        <Order key={order.id} order={order} />
      ))}
    </div>
  );
};

export default StoryOrders;
