import { IBrand } from "@/types/IBrand";
import { BaseApi } from "../BaseApi";

export class BrandApi {
    static getAll = async ( ) => await BaseApi.get<IBrand>("/brand")
}