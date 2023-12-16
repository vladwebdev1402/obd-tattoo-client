import React, { useEffect } from "react";
import Order from "./Order";
import st from "./StoryOrders.module.scss";
import { observer } from "mobx-react-lite";
import { OrderStore } from "@/store";
const StoryOrders = observer(() => {
  useEffect(() => {
    OrderStore.getAll();
  }, []);

  return (
    <div className={st.container}>
      <div className={st.headTxt}>История заказов</div>
      {OrderStore.data.map((order) => (
        <Order key={order._id} order={order} />
      ))}
      {OrderStore.data.length === 0 ? (
        <div>Вы ничего не заказывали</div>
      ) : (
        <></>
      )}
    </div>
  );
});

export default StoryOrders;
