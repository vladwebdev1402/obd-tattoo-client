import { IShopItem } from "@/types/entity/shopItem";
import BaseStore from "../BaseStore";
import { ItemApi } from "@/api";
import { IItemParams } from "@/types/api/itemParamsApi";

class ItemStore extends BaseStore<IShopItem[]> {

  getItems = async (params?: IItemParams, loading=false) => {
    this.isLoadingComplete = loading;
    try {
      const response = await ItemApi.getAll(params);
      this.data = response.data;
      this.message = response.message;
      this.error = ""
    } catch (err) {
      this.handleError(err);
    } finally {
        this.isLoadingComplete = true;
    }
  };

  getItemsWithFilter = (filters: {name: string, isActive: boolean}[] ): IShopItem[] => {
    const filter = filters.filter(f => f.isActive === true)[0];
    const data = this.data.map(item => item);
    if (filter.name === "По алфавиту") {
      return data.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        else return 1;
      });
    }
    else if (filter.name === "Дорогие") {
      return data.sort((a, b) => {
        if (a.price < b.price) return 1;
        else return -1;
      });
    }
    else if (filter.name === "Дешёвые") {
      return data.sort((a, b) => {
        if (a.price > b.price) return 1;
        else return -1;
      });
    }
    return this.data
  } 
}

export default new ItemStore([]);
