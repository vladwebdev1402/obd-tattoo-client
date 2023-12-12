import React, { FC, useEffect, useState } from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import TechnicalSupport from "../../components/contactsManagers/manager/TechnicalSupport";
import ProfileDataInputs from "../../components/profileDataInputs.tsx/ProfileDataInputs";
import StoryOrders from "../../components/storyOrders/StoryOrders";
import { managersData } from "../../data/managersData";
import st from "./ProfilePage.module.scss";
import { ProfileStore } from "@/store";
import { observer } from "mobx-react-lite";
import { IContactPersonResponse } from "@/types/api/IClientResponse";
const ProfilePage: FC = observer(() => {
  const discount: number = 15;
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
      <div className={st.leftContainer}>
        <Breadcrumbs className={st.margin} />
        <h1 className={st.margin}>Личный кабинет</h1>
        <div className={st.msg}>{ProfileStore.message}</div>
        <ProfileDataInputs profile={profile} setProfile={setProfile} />
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
});

export default ProfilePage;
