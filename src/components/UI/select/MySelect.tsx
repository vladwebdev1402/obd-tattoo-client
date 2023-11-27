import React, { FC, useEffect, useRef, useState } from "react";
import { useClose } from "../../../hooks/useClose";
import styles from "./MySelect.module.scss";
interface Props {
  options: { name: string; isActive: boolean }[];
  setOptions: (option: string) => void;
}

const MySelect: FC<Props> = ({ options, setOptions }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isVisible, setIsVisible } = useClose(ref);
  const [currentOption, setCurrentOption] = useState<string>("");

  const seacrhCurrentOption = () => {
    let optionName: string = "";

    options.forEach((option) => {
      option.isActive ? (optionName = option.name) : (optionName = optionName);
    });

    setCurrentOption(optionName);
  };

  useEffect(() => {
    seacrhCurrentOption();
  }, [options]);

  const clickSelect = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div
      className={`${styles.selectContainer} ${isVisible && styles.active}`}
      onClick={clickSelect}
      ref={ref}
    >
      <span className={`${styles.txtOption} ${styles.currentTxtOption}`}>
        {currentOption}
      </span>

      <div className={styles.optionsContainer}>
        {options.map((option) => (
          <div
            key={option.name}
            className={styles.option}
            onClick={() => {
              setOptions(option.name);
            }}
          >
            <span className={styles.txtOption}>{option.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySelect;
