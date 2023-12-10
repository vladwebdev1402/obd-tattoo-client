import React, { Children, FC } from "react";
import st from "./ItemsContainer.module.scss";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  error: string;
  isLoadingComplete: boolean;
  emptyTxt?: string;
}
const ItemsContainer: FC<Props> = ({
  children,
  error,
  isLoadingComplete,
  className = "",
  emptyTxt = "Товары отсутствуют",
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
      {!error &&
        (isLoadingComplete || Children.toArray(children).length > 0) &&
        children}
      {!error &&
        isLoadingComplete &&
        Children.toArray(children).length === 0 && (
          <div className={st.container__empty}>{emptyTxt}</div>
        )}
    </div>
  );
};

export default ItemsContainer;
