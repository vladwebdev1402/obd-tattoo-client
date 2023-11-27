import React, { FC } from "react";
import st from "./BrandImgHeader.module.scss";
interface Props {
  img: string;
  name: string;
}
const BrandImgHeader: FC<Props> = ({ img, name }) => {
  return (
    <div className={st.container}>
      <img className={st.image} src={img} />
      <h1 className={st.headerTxt}>{name}</h1>
    </div>
  );
};

export default BrandImgHeader;
