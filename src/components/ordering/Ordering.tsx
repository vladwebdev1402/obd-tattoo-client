import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalThanksOrder from "@/components/modalThanksOrder/ModalThanksOrder";
import ClipButton from "@UI/button/clipButton/ClipButton";
import LineButton from "@UI/button/lineButton/LineButton";
import MyChecked from "@UI/checked/MyChecked";
import MyInput from "@UI/input/MyInput";
import MyRadio from "@UI/radio/MyRadio";
import st from "./Ordering.module.scss";
import { deliveryRadios, paymentRadios } from "./radios";
import { urls } from "@/clientUrls/clientUrls";
const Ordering = () => {
  const navigate = useNavigate();
  const [payment, setPayment] = useState("Онлайн на сайте");
  const [delivery, setDelivery] = useState("Курьерская служба");
  const [checked, setChecked] = useState(false);
  const [promo, setPromo] = useState("");
  const [modal, setModal] = useState(false);

  return (
    <div className={st.container}>
      {modal && <ModalThanksOrder setModal={setModal} />}
      <div className={st.block1}>
        <div className={st.priceInfoWrapper}>
          <div className={st.priceInfoContainer}>
            <span className={st.infoHeadTxt}>Всего единиц товара:</span>
            <span className={st.infoValueTxt}>{0}</span>
          </div>
          <div className={st.priceInfoContainer}>
            <span className={st.infoHeadTxt}>Общая скидка:</span>
            <span className={st.infoValueTxt}>0₽</span>
          </div>
          <div className={st.priceInfoContainer}>
            <span className={st.infoHeadTxt}>Доп. услуги</span>
            <span className={st.infoValueTxt}>0₽</span>
          </div>
          <div className={`${st.priceInfoContainer} ${st.totalPrice}`}>
            <span className={st.infoHeadTxt}>Итого:</span>
            <span className={st.infoValueTxt}>{0}₽</span>
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
          <LineButton className={st.lineBtn} onClick={() => {}}>
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
              {paymentRadios.map((r) => (
                <MyRadio
                  onChange={() => setPayment(r.title)}
                  title={r.title}
                  checked={payment == r.title}
                  question={r.question}
                  key={r.title}
                  className={st.radio}
                />
              ))}
            </div>
          </div>
          <div className={st.radiosContainer}>
            <div className={st.radiosTitle}>Доставка</div>
            <div className={st.radios}>
              {deliveryRadios.map((r) => (
                <MyRadio
                  onChange={() => setDelivery(r.title)}
                  title={r.title}
                  checked={delivery == r.title}
                  question={r.question}
                  key={r.title}
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
            navigate(urls.services);
          }}
          theme="dark"
        >
          Оформить заказ
        </ClipButton>
        <ClipButton
          className={st.clipBtn}
          onClick={() => {
            setModal(true);
          }}
          theme="light"
        >
          Купить в 1 клик
        </ClipButton>
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
};

export default Ordering;
