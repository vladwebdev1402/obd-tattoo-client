import axios from "axios"
import { ApiUrl } from "./url";
export class BaseApi {

    static get = async <T>(url: string, params?: any): Promise<{result: {data: T, message: string}, status: number}> => {
        const response = await axios.get(ApiUrl + url, params)
        return {result: response.data, status: response.status};
    }

    static post = async <T>(url: string, data: T): Promise<{result: {data: T, message: string}, status: number}> => {
        const response = await axios.post(ApiUrl + url, data);
        return {result: response.data, status: response.status};
    }
}