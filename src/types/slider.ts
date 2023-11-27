import React from "react";

export interface ISLiderStyles {
    st__pagination?: string;
    st__list?: string;
    st__pag__item?: string;
    st__pag__item__active?: string;
    st__pag__btn__next?: string;
    st__pag__btn__prev?: string;
    st__slider__container?: string;
}

export interface ISlider {
    children?: React.ReactNode;
    direction?: "row" | "column";
    styles?: ISLiderStyles,
    spaceBetween?: number;
    freeMode?: boolean;
    countPagItem?: number;
}