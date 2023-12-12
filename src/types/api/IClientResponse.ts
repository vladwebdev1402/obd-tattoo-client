import { IBasketItem } from "../entity/IBasketItem";

export interface IContactPersonResponse {
    name: string,
    surname: string,
    patroname: string,
    phone: string,
    mail: string,
    city: string,
    street: string,
    apartament: number,
    entrance: number,
    floor: number,
    intercom: number,
}

export interface IProfile extends IContactPersonResponse {
    favorites: string[];
    basket: IBasketItem[]
}

export interface IClientResponse {
    data: IProfile;
    message: string;
}

