import React, { FC } from "react";
import st from "./Review.module.scss";
import instImg from "../../../../../assets/staticIcons/inst.svg";
import { IReview } from "../../../../../types/entity/review";
interface Props {
  review: IReview;
}

const Review: FC<Props> = ({ review }) => {
  return (
    <div className={st.container}>
      <div className={`${st.divider} horizontal-divider`}></div>
      <div className={st.faceContainer}>
        <img src={review.img} />
      </div>
      <div className={st.reviewTxt}>{review.text}</div>
      <div className={st.instContainer}>
        <div className={`icon ${st.icon}`}>
          <img src={instImg} />
        </div>
        <a href="" className={st.instLink}>
          @{review.inst}
        </a>
      </div>
      <div className={`${st.divider} horizontal-divider`}></div>
    </div>
  );
};

export default Review;
