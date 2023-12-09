import React, { FC } from "react";
import FilterBtn from "@UI/button/filterBtn/FilterBtn";
import st from "./FIlterCategoryCatalog.module.scss";
import { CategoryStore } from "@/store";
import { observer } from "mobx-react-lite";
interface Props {
  navigate?: (link: string) => void;
  setType?: (value: string) => void;
  currentType?: string;
  all?: boolean;
}
const FilterCategoryCatalog: FC<Props> = observer(
  ({ navigate, setType, currentType = "", all = false }) => {
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
          {CategoryStore.data.map((category) => (
            <li className={st.filter} key={category._id}>
              <FilterBtn
                onClick={() => onClick(category._id)}
                active={currentType == category._id}
              >
                {category.name}
              </FilterBtn>
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export default FilterCategoryCatalog;
