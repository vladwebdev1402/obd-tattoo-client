import { IPromocode } from "@/types/entity/IPromocode"
import { BaseApi } from "../BaseApi"

export class PromocodeApi {
    static getAll = async () => {
        const response = await BaseApi.get<IPromocode[]>("/promocode");
        return response;
    }

    static checkPromocode = async (promocode: string) => {
        const response = await BaseApi.post<{promocode: string}, {discount: number, _id: string}>("/promocode/check", {promocode});
        return response;
    }
}