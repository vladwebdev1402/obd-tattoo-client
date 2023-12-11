import { IContactPerson } from "../entity/contactPerson";

export interface IClientResponse {
    data: IContactPerson;
    message: string;
}