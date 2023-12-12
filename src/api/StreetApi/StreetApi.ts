import { IStreet } from "@/types/entity/IStreet";
import { BaseApi } from "../BaseApi"

export class StreetApi {
    static getAll = async () => {
        const response = await BaseApi.get<IStreet[]>("/street");
        return response;
    }
} 