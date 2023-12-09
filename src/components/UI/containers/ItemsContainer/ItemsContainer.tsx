import React, { FC } from "react";
import st from "./ItemsContainer.module.scss";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  error: string;
  isLoadingComplete: boolean;
}
const ItemsContainer: FC<Props> = ({
  children,
  error,
  isLoadingComplete,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`${st.container} ${className} ${
        isLoadingComplete ? "" : st.container_loading
      }`}
      {...props}
    >
      {!error && !isLoadingComplete && (
        <div className={st.container__loader}></div>
      )}
      {error && isLoadingComplete && (
        <div className={st.container__error}>{error}</div>
      )}
      {!error && isLoadingComplete && children}
    </div>
  );
};

export default ItemsContainer;
