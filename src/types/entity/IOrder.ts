import { IContactPersonResponse } from "../api/IClientResponse";
import { IBasketItem } from "./IBasketItem";

interface IContacts{
    name: string,
    surname: string,
    patroname: string,
    phone: string,
    mail: string,
    city: {name: string},
    street: {name: string},
    apartament: number,
    entrance: number,
    floor: number,
    intercom: number,
}

export interface IOrder {
    _id: string;
    date: string;
    number: number;
    basket: IBasketItem[];
    contacts: IContacts;
    allPrice: number;
    countItems: number;
    status: {name: string};
}