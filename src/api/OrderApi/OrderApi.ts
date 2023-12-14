import { IOrder } from "@/types/entity/IOrder";
import { BaseApi } from "../BaseApi";
import { IContactPersonResponse } from "@/types/api/IClientResponse";
import { IBasketItem } from "@/types/entity/IBasketItem";
import { IPayment } from "@/types/entity/IPayment";
import { IDelivery } from "@/types/entity/IDelivery";

export class OrderApi {
  static getAll = async () => await BaseApi.get<IOrder[]>("/order");

  static placeOrder = async (contacts: IContactPersonResponse, basket: IBasketItem[], payment: string, delivery: string) =>
    await BaseApi.post<
      { contacts: IContactPersonResponse; basket: IBasketItem[], payment: string, delivery: string },
      IOrder
    >("/order", { contacts, basket, payment, delivery });

   static getPayment = async () => await BaseApi.get<IPayment[]>("/payment");
   static getDelivery = async () => await BaseApi.get<IDelivery[]>("/delivery");
}
