export class TokenApi {
    static getToken = () => localStorage.getItem("token");
    static setToken = (token: string) => localStorage.setItem("token", token);
    static removeToken = () => localStorage.removeItem("token");
}