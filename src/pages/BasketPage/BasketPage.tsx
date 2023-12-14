import React, { useState } from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import st from "./BasketPage.module.scss";
import { ordersData } from "../../data/orders";
import ContentBasket from "../../components/contentBasket/ContentBasket";
import ProfileDataInputs from "../../components/profileDataInputs.tsx/ProfileDataInputs";
import Ordering from "../../components/ordering/Ordering";
import { IContactPersonResponse } from "@/types/api/IClientResponse";
import { observer } from "mobx-react-lite";
import { ProfileStore } from "@/store";
const BasketPage = observer(() => {
  const [profile, setProfile] = useState<IContactPersonResponse>({
    name: "",
    surname: "",
    patroname: "",
    phone: "",
    mail: "",
    city: "",
    street: "",
    apartament: 0,
    entrance: 0,
    floor: 0,
    intercom: 0,
  });

  return (
    <div className={st.container}>
      <Breadcrumbs className={st.margin} />
      <h1 className={st.pageTitle}>Корзина</h1>
      <div className={st.contentPageContainer}>
        <div className={st.leftContainer}>
          <ContentBasket
            items={ProfileStore.data.basket}
            className={st.margin}
          />
          <ProfileDataInputs
            isBasket
            profile={profile}
            setProfile={setProfile}
          />
        </div>
        <div className={st.rightContainer}>
          <Ordering contacts={profile} />
        </div>
      </div>
    </div>
  );
});

export default BasketPage;
