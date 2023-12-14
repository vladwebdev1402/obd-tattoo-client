import { IBasketItem } from "../entity/IBasketItem";
import { IContactPersonResponse } from "./IClientResponse";

export interface IPostPlaceOrder {
    contacts: IContactPersonResponse, 
    basket: IBasketItem[],
    payment: string, 
    delivery: string,
    promocode?: string
}