import { IOrder } from "@/types/entity/IOrder";
import { BaseApi } from "../BaseApi";
import { IContactPersonResponse } from "@/types/api/IClientResponse";
import { IBasketItem } from "@/types/entity/IBasketItem";

export class OrderApi {
  static getAll = async () => await BaseApi.get<IOrder[]>("/order");

  static placeOrder = async (contacts: IContactPersonResponse, basket: IBasketItem) =>
    await BaseApi.post<
      { contacts: IContactPersonResponse; basket: IBasketItem },
      IOrder
    >("/order", { contacts, basket });
}
