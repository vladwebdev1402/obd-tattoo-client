import { IContactPerson } from "@/types/entity/contactPerson";
import { BaseApi } from "../BaseApi";

export class ClientApi {
    static getProfile = async () => {
        const response = await BaseApi.get<IContactPerson[]>("/client");
        return response;
    }
    static putProfile = async (person: IContactPerson) => {
      const response = await BaseApi.put<IContactPerson>("/client", person);
      return response;   
    } 
}