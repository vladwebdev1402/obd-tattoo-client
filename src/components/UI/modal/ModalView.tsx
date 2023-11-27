import React, { FC, useEffect } from "react";
import st from "./ModalView.module.scss";
import { useStopScroll } from "../../../hooks/useStopScroll";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}
const ModalView: FC<Props> = ({ className = "", children, ...props }) => {
  useStopScroll();

  return (
    <div className={`${st.modal} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default ModalView;
