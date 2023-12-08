import { IShopItem } from "@/types/shopItem";
import { BaseApi } from "../BaseApi";
import { IItemParams } from "@/types/itemParamsApi";


export class ItemApi {

    static getAll = async (params?: IItemParams) => {
        const response = await BaseApi.get<IShopItem>("/item", {params});
        return response;
    }
}