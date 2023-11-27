import React, { FC } from "react";
import FilterBtn from "@UI/button/filterBtn/FilterBtn";
import st from "./FIlterCategoryCatalog.module.scss";
import { category } from "@/data/catalogCategory";
interface Props {
  navigate?: (link: string) => void;
  setType?: (value: string) => void;
  currentType?: string;
  all?: boolean;
}
const FilterCategoryCatalog: FC<Props> = ({
  navigate,
  setType,
  currentType = "",
  all = false,
}) => {
  const onClick = (str: string) => {
    if (navigate) navigate(str);
    else if (setType) setType(str);
  };
  return (
    <div className={st.containerFilters}>
      <ul className={st.filterList}>
        {all && (
          <li className={st.filter}>
            <FilterBtn
              onClick={() => onClick("all")}
              active={currentType == "all"}
            >
              Все категории
            </FilterBtn>
          </li>
        )}
        {category.slice(1).map((category) => (
          <li className={st.filter} key={category.id}>
            <FilterBtn
              onClick={() => onClick(category.link || "")}
              active={currentType == category.link}
            >
              {category.filter}
            </FilterBtn>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterCategoryCatalog;
