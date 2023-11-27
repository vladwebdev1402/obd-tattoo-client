import React, { FC } from "react";
import st from "./ItemsContainer.module.scss";
interface Props extends React.HTMLAttributes<HTMLDivElement> {}
const ItemsContainer: FC<Props> = ({ children, className = "", ...props }) => {
  return (
    <div className={`${st.container} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default ItemsContainer;
