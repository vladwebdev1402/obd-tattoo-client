import React, { FC } from "react";
import st from "./InputCode.module.scss";
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}
const InputCode: FC<Props> = ({ ...props }) => {
  return <input {...props} className={st.inputCode}></input>;
};

export default InputCode;
