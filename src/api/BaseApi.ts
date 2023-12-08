import axios from "axios"
import { ApiUrl } from "./url";
export class BaseApi {

    static get = async <T>(url: string, params?: any): Promise<{data: T[], message: string}> => {

        const response = await axios.get(ApiUrl + url, params)
        return response.data;
    }

    static post = async <T>(url: string, data: T): Promise<{data: T, message: string}> => {
        const response = await axios.post(ApiUrl + url, data);
        return response.data;
    }
}