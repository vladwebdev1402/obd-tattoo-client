import { useState } from "react";
import st from "./AuthLoginPage.module.scss";
import AuthStore from "@/store/AuthStore/AuthStore";
import MyInput from "@/components/UI/input/MyInput";
import ClipButton from "@/components/UI/button/clipButton/ClipButton";
import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { urls } from "@/clientUrls/clientUrls";
const AuthLoginPage = observer(() => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const loginClick = async () => {
    await AuthStore.login(login, password);
    if (AuthStore.auth) navigate(urls.main);
  };

  return (
    <div className={st.login}>
      <div className={st.login__header}>Авторизация</div>
      <form className={st.login__form} onSubmit={formSubmit}>
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
        <ClipButton
          className={st.login__btn}
          onClick={() => loginClick()}
          theme="dark"
        >
          Войти
        </ClipButton>
      </form>
      <div className={st.login__footer}>
        Не зарегистрированы? <Link to={urls.signup}>Зарегистрироваться</Link>
      </div>
      {AuthStore.message && (
        <div className={st.login__message}>{AuthStore.message}</div>
      )}
    </div>
  );
});

export default AuthLoginPage;
