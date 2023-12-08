import React, { FC } from "react";
import styles from "./MyInput.module.scss";

interface MyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

const MyInput: FC<MyInputProps> = ({ title, className = "", ...props }) => {
  return (
    <div className={`${styles.inputContainer} ${className}`}>
      <div className={styles.inputName}>{title}</div>
      <input className={styles.input} {...props} />
    </div>
  );
};

export default MyInput;
