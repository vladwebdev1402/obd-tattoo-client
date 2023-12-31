import { IBrand } from "@/types/entity/IBrand";
import { BaseApi } from "../BaseApi";

export class BrandApi {
    static getAll = async ( ) => {
        const response = await BaseApi.get<IBrand[]>("/brand");
        return {data: response.data, message: response.message};
    }
}