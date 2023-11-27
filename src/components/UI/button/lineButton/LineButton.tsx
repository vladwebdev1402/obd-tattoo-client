import React, { FC } from "react";
import styles from "./button.module.scss";
interface LineButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const LineButton: FC<LineButtonProps> = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <div className={`${styles.btn} ${className}`} onClick={onClick}>
      <span className={styles.txtBtn}>{children}</span>
    </div>
  );
};

export default LineButton;
