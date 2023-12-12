import { IBasketItem } from "@/types/entity/IBasketItem";
import { BaseApi } from "../BaseApi";

export class BasketApi {
  static getBasket = async () => await BaseApi.get<IBasketItem[]>("/basket");

  static changeItemInBasket = async (basketItem: IBasketItem) =>
    await BaseApi.post<IBasketItem, IBasketItem[]>("/basket", basketItem);
    
}
