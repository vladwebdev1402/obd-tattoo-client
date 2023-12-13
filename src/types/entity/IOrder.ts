import { IContactPersonResponse } from "../api/IClientResponse";
import { IBasketItem } from "./IBasketItem";

export interface IOrder {
    date: Date;
    number: number;
    basket: IBasketItem[];
    contacts: IContactPersonResponse;
    allPrice: number;
    countItems: number;
}