import React, { useContext } from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import st from "./BasketPage.module.scss";
import { ordersData } from "../../data/orders";
import ContentBasket from "../../components/contentBasket/ContentBasket";
import ProfileDataInputs from "../../components/profileDataInputs.tsx/ProfileDataInputs";
import Ordering from "../../components/ordering/Ordering";
const BasketPage = () => {
  return (
    <div className={st.container}>
      <Breadcrumbs className={st.margin} />
      <h1 className={st.pageTitle}>Корзина</h1>
      <div className={st.contentPageContainer}>
        <div className={st.leftContainer}>
          <ContentBasket items={[]} className={st.margin} />
          <ProfileDataInputs isBasket={true} />
        </div>
        <div className={st.rightContainer}>
          <Ordering />
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
