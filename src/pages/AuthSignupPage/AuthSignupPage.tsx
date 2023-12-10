import { useState } from "react";
import st from "./AuthSignupPage.module.scss";
import { Link, useNavigate } from "react-router-dom";
import MyInput from "@/components/UI/input/MyInput";
import ClipButton from "@/components/UI/button/clipButton/ClipButton";
import AuthStore from "@/store/AuthStore/AuthStore";
import { observer } from "mobx-react-lite";
import { urls } from "@/clientUrls/clientUrls";
const AuthSignupPage = observer(() => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const signup = async () => {
    await AuthStore.signup(login, password, repeatPassword);
    if (AuthStore.successfully) {
      AuthStore.clear();
      navigate("/tattoo-react/login");
    }
  };
  return (
    <div className={st.signup}>
      <div className={st.signup__header}>Регистрация</div>
      <form className={st.signup__form} onSubmit={formSubmit}>
        <MyInput
          value={login}
          title="Логин"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setLogin(e.target.value);
          }}
        />
        <MyInput
          type="password"
          value={password}
          title="Пароль"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
        />
        <MyInput
          type="password"
          value={repeatPassword}
          title="Повторить пароль"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setRepeatPassword(e.target.value);
          }}
        />

        <ClipButton
          className={st.signup__btn}
          onClick={() => signup()}
          theme="dark"
        >
          Зарегистрироваться
        </ClipButton>
      </form>
      <div className={st.signup__footer}>
        Зарегистрированы? <Link to={urls.login}>Авторизоваться</Link>
      </div>
      {AuthStore.message && (
        <div className={st.signup__message}>{AuthStore.message}</div>
      )}
    </div>
  );
});

export default AuthSignupPage;
