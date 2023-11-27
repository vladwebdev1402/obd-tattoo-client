import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BrandItem.module.scss";
interface Props {
  img: string;
  id: number;
}
const BrandItem: FC<Props> = ({ img, id }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.brandItem}>
      <img
        className={styles.brandImg}
        src={img}
        alt=""
        onClick={() => {
          navigate(`/tattoo-react/brands/${id}`);
        }}
      />
    </div>
  );
};

export default BrandItem;
