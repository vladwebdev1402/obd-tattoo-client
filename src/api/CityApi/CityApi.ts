import { ICity } from "@/types/entity/ICity";
import { BaseApi } from "../BaseApi"

export class CityApi {
    static getAll = async () => {
        const response = await BaseApi.get<ICity[]>("/city");
        return response;
    }
} 