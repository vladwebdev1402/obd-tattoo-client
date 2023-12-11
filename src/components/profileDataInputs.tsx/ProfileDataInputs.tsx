import React, { FC, useState } from "react";
import { IContactPerson } from "@/types/entity/contactPerson";
import { regNumber } from "@/utils/regNumber";
import LineButton from "@UI/button/lineButton/LineButton";
import MyInput from "@UI/input/MyInput";
import st from "./ProfileDataInputs.module.scss";
interface Props {
  isBasket?: boolean;
}
const ProfileDataInputs: FC<Props> = ({ isBasket = false }) => {
  const [profile, setProfile] = useState<IContactPerson>({
    id: 0,
    fullName: "",
    number: "",
    mail: "",
    city: "",
    streetAndHouse: "",
    flat: 0,
    entrance: 0,
    floor: 0,
    intercom: 0,
  });

  return (
    <div className={st.profileDataWrapper}>
      <div className={st.profileDataContainer}>
        <div className={st.profileDataHead}>
          <div className={st.headTxt}>Информация о получателе</div>
          {!isBasket && (
            <LineButton onClick={() => {}}>
              <span className={st.editTxt}> Редактировать</span>
            </LineButton>
          )}
        </div>
        <div className={st.inputsContainer}>
          <MyInput
            title="ФИО*"
            value={profile.fullName || ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setProfile({ ...profile, fullName: e.target.value });
            }}
            placeholder="Иванов Иван Иванович"
          />
          <MyInput
            className={st.number}
            title="Телефон*"
            value={profile.number || ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setProfile({ ...profile, number: e.target.value });
            }}
            placeholder="8(800)555-35-35"
          />
          <MyInput
            title="Эл. почта*"
            value={profile.mail || ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setProfile({ ...profile, mail: e.target.value });
            }}
            placeholder="Ivanov2021@mail.ru"
          />
        </div>
      </div>
      <div className={st.profileDataContainer}>
        <div className={st.profileDataHead}>
          <div className={st.headTxt}>Адрес доставки</div>
          {!isBasket && (
            <LineButton onClick={() => {}}>
              <span className={st.editTxt}> Редактировать</span>
            </LineButton>
          )}
        </div>
        <div className={st.inputsContainer}>
          <MyInput
            className={st.city}
            title="Город*"
            value={profile.city || ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setProfile({ ...profile, city: e.target.value });
            }}
            placeholder="Москва"
          />
          <MyInput
            className={st.street}
            title="Улица, дом*"
            value={profile.streetAndHouse || ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setProfile({ ...profile, streetAndHouse: e.target.value });
            }}
            placeholder="ул. Ленина д. 25"
          />
        </div>

        <div className={`${st.inputsContainer} ${st.inputsContainerFlat}`}>
          <MyInput
            title="Квартира*"
            value={`${profile.flat}` == "0" ? "" : `${profile.flat}`}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setProfile({
                ...profile,
                flat: Number(regNumber(`${profile.flat}`, e.target.value)),
              });
            }}
            placeholder="12"
          />
          <MyInput
            title="Подъезд"
            value={`${profile.entrance}` == "0" ? "" : `${profile.entrance}`}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setProfile({
                ...profile,
                entrance: Number(
                  regNumber(`${profile.entrance}`, e.target.value)
                ),
              });
            }}
            placeholder="3"
          />{" "}
          <MyInput
            title="Этаж"
            value={`${profile.floor}` == "0" ? "" : `${profile.floor}`}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setProfile({
                ...profile,
                floor: Number(regNumber(`${profile.floor}`, e.target.value)),
              });
            }}
            placeholder="2"
          />
          <MyInput
            title="Домофон"
            value={`${profile.intercom}` == "0" ? "" : `${profile.intercom}`}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setProfile({
                ...profile,
                intercom: Number(
                  regNumber(`${profile.intercom}`, e.target.value)
                ),
              });
            }}
            placeholder="242"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileDataInputs;
