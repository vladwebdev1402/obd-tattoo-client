import React, { FC } from "react";
import Review from "./review/Review";
import st from "./Reviews.module.scss";
import { useWidth } from "../../../../hooks/useClose";
import Slider from "../../../../components/UI/Slider/Slider";
import { reviews } from "../../../../data/reviews";
const Reviews: FC = () => {
  const width = useWidth();
  return (
    <div className={st.container}>
      <h1 className={st.headTxt}>Отзывы</h1>
      <div className={st.reviewBody}>
        <Slider
          st__slider__container={st.sliderContainer}
          st__list={st.list}
          st__pagination={st.pagination}
          st__pag__item={st.pagItem}
          st__pag__item__active={st.pagItemActive}
          st__pag__btn__next={st.btnNext}
          st__pag__btn__prev={st.btnPrev}
          st__slide__active={st.slideActive}
          st__slide__notActive={st.notActive}
          spaceBetween={width <= 768 ? 1 : 20}
          freeMode={true}
          countPagItem={5}
          withEffect={true}
          countActive={width <= 1368 ? 1 : 2}
        >
          {reviews.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
