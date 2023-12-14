import { IPromocode } from "@/types/entity/IPromocode"
import { BaseApi } from "../BaseApi"

export class PromocodeApi {
    static getAll = async () => {
        const response = await BaseApi.get<IPromocode[]>("/promocode");
        return response;
    }
}