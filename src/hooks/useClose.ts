import React, {useEffect, useRef, useState} from "react";

export const useWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    
    useEffect(() => {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    return width;
  };
export const useClose = (ref: React.RefObject<HTMLDivElement>) => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
        if (
            ref.current &&
            !ref.current.contains(event.target as Node)
        ) {
            setIsVisible(false);
        }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
        document.removeEventListener("click", handleClickOutside);
        };
    }, [ref]);

    return {isVisible, setIsVisible}
}