import React, { FC } from "react";
import st from "./ImgRadio.module.scss";
interface Props {
  img: string;
  onClick: () => void;
  active: boolean;
}
const ImgRadio: FC<Props> = ({ img, onClick, active }) => {
  return (
    <div className={`${st.container} ${active && st.active}`} onClick={onClick}>
      <img className={st.img} src={img} />
    </div>
  );
};

export default ImgRadio;
