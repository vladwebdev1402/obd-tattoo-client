import { IBrand } from "@/types/IBrand";
import { BaseApi } from "../BaseApi";

export class BrandApi {
    static getAll = async ( ) => {
        const response = await BaseApi.get<IBrand[]>("/brand");
        if (response.status !== 200) throw new Error(response.result.message)
        return response.result;
    }
}