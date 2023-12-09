import { ICategory } from "@/types/ICategory";
import { BaseApi } from "../BaseApi";
import { ApiUrl } from "../url";

export class CategoryApi {  
    
    static getAll = async () => {
        const response = await BaseApi.get<ICategory>("/category")
        return response;
    };
}
