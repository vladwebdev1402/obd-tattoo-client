import { useMemo } from "react";
import { ICategory } from "../types/category";

export const useBrands = (brands: ICategory[], countInGroup: number) => {
    const brandsGroup = useMemo(() => {
      let groups: Array<Array<ICategory>> = [];
      for (let i = 0; i < brands.length; i+=countInGroup) {
        groups.push(brands.slice(i, i+countInGroup));
      }
      return groups;
    }, [brands, countInGroup]);
  
    return brandsGroup as Array<Array<ICategory>>;
  };
  