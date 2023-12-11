import axios from "axios";
import { ApiUrl } from "./url";
import { TokenApi } from "./TokenApi/TokenApi";

const customAxios = axios.create({
  baseURL: ApiUrl,
});

customAxios.interceptors.request.use(
  (req) => {
    req.headers.Authorization = TokenApi.getToken();
    return req;
  },
  (err) => Promise.reject(err)
);

customAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response &&
      error.response.status !== 200 &&
      error.response.status !== 404 &&
      error.response.status !== 500
    )
      return error.response;
    else return Promise.reject(error);
  }
);

export class BaseApi {
  static get = async <T>(
    url: string,
    params?: any
  ): Promise<{ data: T; message: string }> => {
    const response = await customAxios.get(url, params);
    return response.data
  };

  static post = async <T>(
    url: string,
    data: T
  ): Promise<{ data: T; message: string }> => {
    const response = await customAxios.post(url, data);
    return response.data
  };

  static put = async <T>(
    url: string,
    data: T
  ): Promise<{ data: T; message: string }> => {
    const response = await customAxios.put(url, data);
    return response.data
  };
}
