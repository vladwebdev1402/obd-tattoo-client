import React, { FC, useState, useEffect } from "react";
import { regNumber } from "@/utils/regNumber";
import LineButton from "@UI/button/lineButton/LineButton";
import MyInput from "@UI/input/MyInput";
import st from "./ProfileDataInputs.module.scss";
import { CityStore, ProfileStore, StreetStore } from "@/store";
import { observer } from "mobx-react-lite";
import { IContactPersonResponse } from "@/types/api/IClientResponse";
import DropdownMenu from "../UI/DropdownMenu/DropdownMenu";
import { IDropdownValue } from "@/types/entity/IDropdownValue";

interface Props {
  isBasket?: boolean;
  profile: IContactPersonResponse;
  setProfile: (value: IContactPersonResponse) => void;
}

const ProfileDataInputs: FC<Props> = observer(
  ({ isBasket = false, profile, setProfile }) => {
    const getAll = async () => {
      await ProfileStore.getProfile();
      await CityStore.getAll();
      await StreetStore.getAll();
      const curProfile = ProfileStore.parseResToInputs();
      setProfile(curProfile);
    };

    const changeCity = (value: { name: string; _id: string }) => {
      setProfile({ ...profile, city: value._id });
      setCurrentCity(value);
    };

    const changeStreet = (value: { name: string; _id: string }) => {
      setProfile({ ...profile, street: value._id });
      setCurrentStreet(value);
    };

    const [currenCity, setCurrentCity] = useState<IDropdownValue | null>(null);
    const [currentStreet, setCurrentStreet] = useState<IDropdownValue | null>(
      null
    );

    useEffect(() => {
      getAll();
    }, []);

    useEffect(() => {
      setCurrentStreet(
        StreetStore.data.filter((s) => s._id === profile.street)[0] || null
      );
      setCurrentCity(
        CityStore.data.filter((c) => c._id === profile.city)[0] || null
      );
    }, [profile, CityStore.data, StreetStore.data]);

    const editInfo = () => {
      if (
        profile.name &&
        profile.surname &&
        profile.patroname &&
        profile.phone &&
        profile.mail
      )
        ProfileStore.putProfile(profile);
      else ProfileStore.message = "Заполните обязательные поля";
    };

    const editDelivery = () => {
      if (profile.city && profile.street && profile.apartament)
        ProfileStore.putProfile(profile);
      else ProfileStore.message = "Заполните обязательные поля";
    };

    return (
      <div className={st.profileDataWrapper}>
        <div className={st.profileDataContainer}>
          <div className={st.profileDataHead}>
            <div className={st.headTxt}>Информация о получателе</div>
            {!isBasket && (
              <LineButton
                onClick={() => {
                  editInfo();
                }}
              >
                <span className={st.editTxt}> Редактировать</span>
              </LineButton>
            )}
          </div>
          <div className={`${st.inputsContainer} ${st.info_user}`}>
            <div className={st.inputs__fio}>
              <MyInput
                title="Фамилия*"
                value={profile.surname || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setProfile({ ...profile, surname: e.target.value });
                }}
                placeholder="Иванов"
              />
              <MyInput
                title="Имя*"
                value={profile.name || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setProfile({ ...profile, name: e.target.value });
                }}
                placeholder="Иван"
              />
              <MyInput
                title="Отчество*"
                value={profile.patroname || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setProfile({ ...profile, patroname: e.target.value });
                }}
                placeholder="Иванович"
              />
            </div>
            <div className={st.inputs_phone_mail}>
              <MyInput
                className={st.number}
                title="Телефон*"
                value={profile.phone || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setProfile({ ...profile, phone: e.target.value });
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
        </div>
        <div className={st.profileDataContainer}>
          <div className={st.profileDataHead}>
            <div className={st.headTxt}>Адрес доставки</div>
            {!isBasket && (
              <LineButton
                onClick={() => {
                  editDelivery();
                }}
              >
                <span className={st.editTxt}> Редактировать</span>
              </LineButton>
            )}
          </div>
          <div className={st.inputsContainer}>
            <DropdownMenu
              values={CityStore.data}
              setCurrent={changeCity}
              placeholder="Выберите город"
              inputPlaceholder="Поиск города"
              current={currenCity}
              title="Город*"
            />
            <DropdownMenu
              values={
                profile.city
                  ? StreetStore.data.filter((s) => s.city === profile.city)
                  : StreetStore.data
              }
              setCurrent={changeStreet}
              placeholder="Выберите улицу"
              inputPlaceholder="Поиск улицы"
              title="Улица, дом*"
              current={currentStreet}
            />
          </div>

          <div className={`${st.inputsContainer} ${st.inputsContainerFlat}`}>
            <MyInput
              title="Квартира*"
              value={
                `${profile.apartament}` == "0" ? "" : `${profile.apartament}`
              }
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setProfile({
                  ...profile,
                  apartament: Number(
                    regNumber(`${profile.apartament}`, e.target.value)
                  ),
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
  }
);

export default ProfileDataInputs;
