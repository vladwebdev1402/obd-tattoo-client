import React, { useState, useRef, RefObject } from "react";
import { usePagination } from "./usePaginatioRadios";

function getTouchEventData(
  e:
    | TouchEvent
    | MouseEvent
    | React.TouchEvent<HTMLElement>
    | React.MouseEvent<HTMLElement>
) {
  return "changedTouches" in e ? e.changedTouches[0] : e;
}


export const useSlider = (
  countChildren: number,
  direction: string,
  containerRef: RefObject<HTMLUListElement>,
  spaceBetween: number,
  freeMode: boolean=false
): [
  boolean,
  number[],
  (e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => void,
  (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLElement>) => void,
  (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLElement>) => void,
  (idx: number) => void,
  number,
  number
] => {
  const arrayPagination = usePagination(countChildren);
  const [isAnimatade, setIsAnimatade] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);
  const [currentPagIdx, setCurrentPagIdx] = useState<number>(0);
  const startOffset = useRef(0);
  const currentOffset = useRef(0);
  const maxOffset = useRef<number>(0);
  const newOffset = useRef<number>(0);

  const getScroll = () => {
    return direction === "row"
      ? containerRef.current!.scrollWidth + spaceBetween
      : containerRef.current!.scrollHeight + spaceBetween;
  };
  const getContainer = () => {
    return direction === "row"
      ? containerRef.current!.clientWidth + spaceBetween
      : containerRef.current!.clientHeight + spaceBetween;
  };
  const getCursorPos = (e: | TouchEvent
    | MouseEvent
    | React.TouchEvent<HTMLElement>
    | React.MouseEvent<HTMLElement>) => {
    return direction === "row" ? getTouchEventData(e).clientX : getTouchEventData(e).clientY;
  };

  const changePagIndicator = () => {
    const idx = (-newOffset.current * countChildren) / getScroll();
    setCurrentPagIdx(Math.round(idx));
  };
  const setNewOffsetThroughIdx = (idx: number) => {
    if (freeMode) newOffset.current = idx == countChildren - 1 ? 
      -getScroll() + getContainer() :
      -idx * getScroll() / countChildren
    else newOffset.current = -idx * getContainer();
    checkMinMaxOffset()
  };

  const checkMinMaxOffset = () => {
    maxOffset.current = getScroll() - getContainer()
    if (newOffset.current < -maxOffset.current) {
      newOffset.current = -maxOffset.current;
    }
    if (newOffset.current > 0) {
      newOffset.current = 0;
    }
  };
  const onClickPagIndicator = (idx: number) => {
    setCurrentPagIdx(idx);
    setNewOffsetThroughIdx(idx);
    setOffset(newOffset.current);
    setIsAnimatade(true);
  };

  const onClickNext = () => {
    let pagInd = currentPagIdx + 1 == countChildren
        ? currentPagIdx
        : currentPagIdx + 1;
    setNewOffsetThroughIdx(pagInd);
    setOffset(newOffset.current);
    setCurrentPagIdx(pagInd);
    setIsAnimatade(true);
  };

  const onClickPrev = () => {
    let pagInd = currentPagIdx - 1 == -1 ? currentPagIdx : currentPagIdx - 1;
    setNewOffsetThroughIdx(pagInd);
    setOffset(newOffset.current);
    setCurrentPagIdx(pagInd);
    setIsAnimatade(true);
  };

  const onClickStart = (e: React.TouchEvent<HTMLElement> | React.MouseEvent<HTMLElement>) => {
    startOffset.current = getCursorPos(e);
    setIsAnimatade(false);
    window.addEventListener("touchmove", onMouseMove);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onClickEnd);
    window.addEventListener("touchend", onClickEnd);
  };
  const onMouseMove = (e: TouchEvent | MouseEvent) => {
    currentOffset.current = getCursorPos(e);
    const diff = currentOffset.current - startOffset.current;
    newOffset.current = diff + offset;
    checkMinMaxOffset();
    changePagIndicator();
    setOffset(newOffset.current);

  };

  const magnet = () => {
    const indMulti = Math.round(-newOffset.current / getContainer());
    newOffset.current = indMulti * getContainer() * -1;
  }

  const onClickEnd = () => {
    if (!freeMode) magnet()
    setIsAnimatade(true);
    setOffset(newOffset.current);
    window.removeEventListener("touchmove", onMouseMove);
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("touchend", onClickEnd);
    window.removeEventListener("mouseup", onClickEnd);
  };

  return [
    isAnimatade,
    arrayPagination,
    onClickStart,
    onClickNext,
    onClickPrev,
    onClickPagIndicator,
    offset,
    currentPagIdx,
  ];
};
