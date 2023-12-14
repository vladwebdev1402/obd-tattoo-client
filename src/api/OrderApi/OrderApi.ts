import { IOrder } from "@/types/entity/IOrder";
import { BaseApi } from "../BaseApi";
import { IPayment } from "@/types/entity/IPayment";
import { IDelivery } from "@/types/entity/IDelivery";
import { IPostPlaceOrder } from "@/types/api/IPostPlaceOrder";

export class OrderApi {
  static getAll = async () => await BaseApi.get<IOrder[]>("/order");

  static placeOrder = async (payload: IPostPlaceOrder) =>
    await BaseApi.post<IPostPlaceOrder, IOrder>("/order", { ...payload });

  static getPayment = async () => await BaseApi.get<IPayment[]>("/payment");
  static getDelivery = async () => await BaseApi.get<IDelivery[]>("/delivery");
}
