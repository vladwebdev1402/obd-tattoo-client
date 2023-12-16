import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalThanksOrder from "@/components/modalThanksOrder/ModalThanksOrder";
import ClipButton from "@UI/button/clipButton/ClipButton";
import LineButton from "@UI/button/lineButton/LineButton";
import MyChecked from "@UI/checked/MyChecked";
import MyInput from "@UI/input/MyInput";
import MyRadio from "@UI/radio/MyRadio";
import st from "./Ordering.module.scss";
import { urls } from "@/clientUrls/clientUrls";
import assert from "assert";
import { OrderStore, ProfileStore, PromocodeStore } from "@/store";
import { IContactPersonResponse } from "@/types/api/IClientResponse";
import { observer } from "mobx-react-lite";

interface Props {
  contacts: IContactPersonResponse;
}

const Ordering: FC<Props> = observer(({ contacts }) => {
  const navigate = useNavigate();
  const [payment, setPayment] = useState("");
  const [delivery, setDelivery] = useState("");
  const [checked, setChecked] = useState(false);
  const [promo, setPromo] = useState("");
  const [modal, setModal] = useState(false);
  const [number, setNumber] = useState(0);
  const placeOrder = async () => {
    // проверка согласия
    if (!checked) {
      OrderStore.setMessage("Необходимо согласиться с нашими условиями!");
      return;
    }
    // проверка, что корзина не пустая
    if (ProfileStore.data.basket.length === 0) {
      OrderStore.setMessage("Добавьте товары в корзину!");
      return;
    }

    // проверка, что анкета полностью заполнена
    if (!ProfileStore.checkValuesProfile(contacts)) {
      OrderStore.setMessage("Заполните все обязательные поля в анкете!");
      return;
    }

    // обновление профиля, если были изменения
    try {
      assert.deepStrictEqual(contacts, ProfileStore.parseResToInputs(), "not");
    } catch {
      await ProfileStore.putProfile(contacts);
    }

    // оформление заказа с последующей очисткой корзины
    try {
      const num = await OrderStore.placeOrder({
        contacts: ProfileStore.parseResToInputs(),
        basket: ProfileStore.data.basket,
        payment,
        delivery,
        promocode: PromocodeStore._id,
      });
      setNumber(num);
      setModal(true);
    } catch (e) {}
  };

  const checkPromo = async () => {
    await PromocodeStore.checkPromocode(promo);
  };

  useEffect(() => {}, [payment, delivery]);

  useEffect(() => {
    setDelivery(OrderStore.delivery[0]?._id ?? "");
  }, [OrderStore.delivery]);

  useEffect(() => {
    setPayment(OrderStore.payment[0]?._id ?? "");
  }, [OrderStore.payment]);

  useEffect(() => {
    OrderStore.getDelivery();
    OrderStore.getPayment();
  }, []);

  return (
    <div className={st.container}>
      {modal && <ModalThanksOrder number={number} setModal={setModal} />}
      <div className={st.block1}>
        <div className={st.priceInfoWrapper}>
          <div className={st.priceInfoContainer}>
            <span className={st.infoHeadTxt}>Всего единиц товара:</span>
            <span className={st.infoValueTxt}>{ProfileStore.count}</span>
          </div>
          <div className={st.priceInfoContainer}>
            <span className={st.infoHeadTxt}>Общая скидка:</span>
            <span className={st.infoValueTxt}>
              {(ProfileStore.allPrice * PromocodeStore.discount) / 100}₽
            </span>
          </div>
          <div className={st.priceInfoContainer}>
            <span className={st.infoHeadTxt}>Доп. услуги</span>
            <span className={st.infoValueTxt}>0₽</span>
          </div>
          <div className={`${st.priceInfoContainer} ${st.totalPrice}`}>
            <span className={st.infoHeadTxt}>Итого:</span>
            <span className={st.infoValueTxt}>
              {ProfileStore.allPrice -
                ProfileStore.allPrice * (PromocodeStore.discount / 100)}
              ₽
            </span>
          </div>
        </div>
        <div className={st.promocodeContainer}>
          <MyInput
            className={st.inputPromocode}
            placeholder="Driskell2000"
            title="Промокод"
            value={promo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPromo(e.target.value);
            }}
          />
          <div className={st.promo__msg}>{PromocodeStore.message}</div>
          <LineButton className={st.lineBtn} onClick={checkPromo}>
            Активировать промокод
          </LineButton>
        </div>
        <div className="horizontal-divider"></div>
      </div>
      <div className={st.block2}>
        <div className={st.radiosWrapper}>
          <div className={st.radiosContainer}>
            <div className={st.radiosTitle}>Оплата</div>
            <div className={st.radios}>
              {OrderStore.payment.length > 0 &&
                OrderStore.payment.map((r) => (
                  <MyRadio
                    onChange={() => setPayment(r._id)}
                    title={r.name}
                    checked={payment == r._id}
                    question={r.promt}
                    key={r._id}
                    className={st.radio}
                  />
                ))}
            </div>
          </div>
          <div className={st.radiosContainer}>
            <div className={st.radiosTitle}>Доставка</div>
            <div className={st.radios}>
              {OrderStore.delivery.length > 0 &&
                OrderStore.delivery.map((r) => (
                  <MyRadio
                    onChange={() => setDelivery(r._id)}
                    title={r.name}
                    checked={delivery == r._id}
                    question={r.promt}
                    key={r._id}
                    className={st.radio}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="horizontal-divider"></div>
      </div>

      <div className={st.btnWrapper}>
        <ClipButton
          className={st.clipBtn}
          onClick={() => {
            placeOrder();
            // navigate(urls.services);
          }}
          theme="dark"
        >
          Оформить заказ
        </ClipButton>
        {/* <ClipButton
          className={st.clipBtn}
          onClick={() => {
            setModal(true);
          }}
          theme="light"
        >
          Купить в 1 клик
        </ClipButton> */}
        <div className={st.order__msg}>{OrderStore.message}</div>
        <MyChecked
          className={st.checked}
          onChange={() => setChecked(!checked)}
          checked={checked}
        >
          Согласен с
          <a href="#" className={st.link}>
            публичной офертой
          </a>{" "}
          и
          <a href="#" className={st.link}>
            {" "}
            обработкой персональных данных
          </a>
        </MyChecked>
      </div>
    </div>
  );
});

export default Ordering;
