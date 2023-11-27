import React, { FC } from "react";
import st from "./CloseModal.module.scss";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {}

const CloseModal: FC<Props> = ({ className, ...props }) => {
  return <button className={`${st.btn} ${className}`} {...props}></button>;
};

export default CloseModal;
