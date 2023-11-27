import React, { FC } from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import TechnicalSupport from "../../components/contactsManagers/manager/TechnicalSupport";
import ProfileDataInputs from "../../components/profileDataInputs.tsx/ProfileDataInputs";
import StoryOrders from "../../components/storyOrders/StoryOrders";
import { managersData } from "../../data/managersData";
import st from "./ProfilePage.module.scss";
const ProfilePage: FC = () => {
  const discount: number = 15;
  return (
    <div className={st.container}>
      <div className={st.leftContainer}>
        <Breadcrumbs className={st.margin} />
        <h1 className={st.margin}>Личный кабинет</h1>
        <ProfileDataInputs />
        <StoryOrders />
      </div>
      <div className={st.rightContainer}>
        <div className={st.discountContainer}>
          Ваша Персональная скидка:
          <span className={st.discount}> {discount}%</span>
        </div>
        <TechnicalSupport personalSupport={true} manager={managersData[0]} />
      </div>
    </div>
  );
};

export default ProfilePage;
