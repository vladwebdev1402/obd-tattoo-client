import React, { FC, useState } from "react";
import ClipButton from "@UI/button/clipButton/ClipButton";
import LineButton from "@UI/button/lineButton/LineButton";
import MyChecked from "@UI/checked/MyChecked";
import InputCode from "@UI/input/InputCode";
import MyInput from "@UI/input/MyInput";
import st from "./ModalAuth.module.scss";
import ModalView from "@UI/modal/ModalView";
import CloseModal from "@UI/button/closeModal/CloseModal";
import { useNavigate } from "react-router-dom";
import { urls } from "@/clientUrls/clientUrls";
interface Props {
  setModal: (modal: boolean) => void;
}

const ModalAuth: FC<Props> = ({ setModal }) => {
  // const [number, setNumber] = useState("");
  // const [checked, setChecked] = useState(false);
  // const [smsTo, setSmsTo] = useState(false);
  // const [code, setCode] = useState({ 0: "", 1: "", 2: "", 3: "" });
  const navigate = useNavigate();
  return (
    <ModalView onClick={() => setModal(false)}>
      <div
        className={`${st.modalBody}`}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
        }}
      >
        <CloseModal onClick={() => setModal(false)} className={st.closeBtn} />
        <div className={st.auth__head}>Недостаточно прав</div>
        <div className={st.auth__txt}>
          Вы не автозированы. Пожалуйста, авторизуйтесь!
        </div>
        <ClipButton
          className={st.btn}
          onClick={() => navigate(urls.login)}
          theme="dark"
        >
          Авторизоваться
        </ClipButton>
      </div>
    </ModalView>
  );
};

export default ModalAuth;

{
  /* 
        <CloseModal onClick={() => setModal(false)} className={st.closeBtn} />

        {!smsTo && <div className={st.headTxt}>Личный кабинет</div>}
        {smsTo && <div className={st.headTxt}>Введите код</div>}

        {!smsTo && (
          <MyInput
            value={number}
            placeholder="+7 ХХХ ХХХ ХХ ХХ"
            title="Введите номер"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setNumber(e.target.value);
            }}
          />
        )}

        {smsTo && (
          <div className={st.codeInputContainer}>
            <InputCode
              value={code[0]}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCode({ ...code, 0: e.target.value })
              }
            />
            <InputCode
              value={code[1]}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCode({ ...code, 1: e.target.value })
              }
            />
            <InputCode
              value={code[2]}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCode({ ...code, 2: e.target.value })
              }
            />
            <InputCode
              value={code[3]}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCode({ ...code, 3: e.target.value })
              }
            />
            <button className={st.btnOk} onClick={() => setModal(false)}>
              Ok
            </button>
          </div>
        )}

        {smsTo && (
          <span className={st.infoTxt}>
            Вам потупит звонок на{" "}
            <span className={st.numberTxt}>{number} </span>
            Введите последние 4 цифры звонящего номера. Получить новый код можно
            будет через 01:48
          </span>
        )}

        {!smsTo && (
          <ClipButton
            className={st.btn}
            onClick={() => {
              setSmsTo(true);
            }}
            theme="dark"
          >
            Получить код в SMS
          </ClipButton>
        )}

        {smsTo && (
          <LineButton
            onClick={() => {
              setSmsTo(false);
            }}
          >
            Не приходит код
          </LineButton>
        )}

        <MyChecked
          className={st.checked}
          title="При воходе или регистрации вы соглашаетесь с условиями предоставления сервиса"
          onChange={() => {
            setChecked(!checked);
          }}
          checked={checked}
        />
      </div> */
}
