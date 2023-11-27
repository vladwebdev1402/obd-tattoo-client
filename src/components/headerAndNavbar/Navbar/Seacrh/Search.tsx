import React, { FC, useState } from "react";
import styles from "./Search.module.scss";
interface Props {
  className?: string;
}
const Search: FC<Props> = ({ className = "" }) => {
  const [value, setValue] = useState<string>("");
  return (
    <input
      type="text"
      placeholder="Поиск"
      className={`${className} ${styles.myInput}`}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
      }}
    />
  );
};

export default Search;
