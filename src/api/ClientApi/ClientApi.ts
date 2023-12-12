import { BaseApi } from "../BaseApi";
import { IClientResponse, IContactPersonResponse, IProfile } from "@/types/api/IClientResponse";

export class ClientApi {
    static getProfile = async () => {
        const response = await BaseApi.get<IProfile>("/client");
        return response;
    }
    static putProfile = async (person: IContactPersonResponse) => {
      const response = await BaseApi.put<IContactPersonResponse>("/client", person);
      return response;   
    } 
}