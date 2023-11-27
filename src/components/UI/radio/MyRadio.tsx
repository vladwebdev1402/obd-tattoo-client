import React, { FC } from "react";
import st from "./Radio.module.scss";

interface Props {
  title: string;
  onChange: () => void;
  checked: boolean;
  question?: string;
  className?: string;
}

const MyRadio: FC<Props> = ({
  title,
  onChange,
  checked,
  question = "",
  className = "",
}) => {
  return (
    <label className={`${st.radioContainer} ${className}`}>
      <input
        className={st.input}
        type="radio"
        onChange={onChange}
        checked={checked}
      />
      <div className={st.radioIcon}></div>
      <span className={st.title}>{title}</span>
      {question && (
        <div className={st.questionIcon}>
          <div className={st.info}>{question}</div>
        </div>
      )}
    </label>
  );
};

export default MyRadio;
