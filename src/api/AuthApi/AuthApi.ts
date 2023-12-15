import axios from "axios";
import { AuthUrl } from "../url";
import { IAuthError } from "@/types/api/IAuthError";
import { TokenApi } from "../TokenApi/TokenApi";

const customAxios = axios.create({
  baseURL: AuthUrl,
});

customAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response &&
      error.response.status !== 200 &&
      error.response.status !== 404 &&
      error.response.status !== 500
    ) return error.response;
    else return Promise.reject(error);
  }
);

export class AuthApi {
  static signup = async (
    login: string,
    password: string
  ): Promise<{ message: string; successfully: boolean; errors?: {errors: IAuthError[]} }> => {
    const response = await customAxios.post("/signup", { login, password });
    return response.data;
  };

  static login = async (
    login: string,
    password: string
  ): Promise<{ message: string; successfully: boolean; token: string }> => {
    const response = await customAxios.post("/login", { login, password });
    return response.data;
  };

  static check = async (): Promise<{ message: string; successfully: boolean }> => {
    const response = await customAxios.get("/check", {headers: {"Authorization": TokenApi.getToken()}});
    return response.data;
  }
}
