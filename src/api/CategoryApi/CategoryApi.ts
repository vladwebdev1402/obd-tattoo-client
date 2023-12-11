import { ICategory } from "@/types/ICategory";
import { BaseApi } from "../BaseApi";
import { ApiUrl } from "../url";

export class CategoryApi {  
    
    static getAll = async () => {
        const response = await BaseApi.get<ICategory[]>("/category")
        return {data: response.data, message: response.message};
    };
}
