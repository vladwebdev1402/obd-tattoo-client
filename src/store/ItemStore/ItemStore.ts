import { IShopItem } from "@/types/shopItem";
import BaseStore from "../BaseStore";
import { ItemApi } from "@/api";
import { IItemParams } from "@/types/itemParamsApi";

class ItemStore extends BaseStore<IShopItem> {
  constructor() {
    super();
  }

  getItems = async (params?: IItemParams) => {
    this.isLoadingComplete = false;
    try {
      const response = await ItemApi.getAll(params);
      this.data = response.data;
      this.message = response.message;
      this.isLoadingComplete = true;

    } catch (err) {
      this.handleError(err);
    } finally {
        this.isLoadingComplete = true;
    }
  };
}

export default new ItemStore();
