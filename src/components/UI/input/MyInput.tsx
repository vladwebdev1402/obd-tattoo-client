import React, { FC, useState } from "react";
import styles from "./MyInput.module.scss";

interface MyInputProps {
  title: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const MyInput: FC<MyInputProps> = ({
  title,
  placeholder,
  onChange,
  value,
  className = "",
}) => {
  return (
    <div className={`${styles.inputContainer} ${className}`}>
      <div className={styles.inputName}>{title}</div>
      <input
        value={value}
        onChange={onChange}
        className={styles.input}
        placeholder={placeholder}
      />
    </div>
  );
};

export default MyInput;
