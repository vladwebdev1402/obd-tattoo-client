import { useMemo } from "react";
import { ISlide } from "../types/swiper";

export const usePagination = (count: number) => {
  const addRadios = useMemo(() => {
    let items: number[] = [];
    for (let i = 0; i < count; i++) {
      items.push(i);
    }
    return items;
  }, [count]);

  return addRadios;
};
