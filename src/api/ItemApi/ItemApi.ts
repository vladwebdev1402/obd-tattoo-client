import { IShopItem } from "@/types/shopItem";
import { BaseApi } from "../BaseApi";
import { IItemParams } from "@/types/itemParamsApi";


export class ItemApi {

    static getAll = async (params?: IItemParams) => {
        const response = await BaseApi.get<IShopItem[]>("/item", {params});
        return {data: response.data, message: response.message};
    }

    static getItemById = async (_id: string) => {
        
        const response = await BaseApi.get<IShopItem[]>("/item", {params: {_id}})
        return {data: response.data, message: response.message};
    };
}