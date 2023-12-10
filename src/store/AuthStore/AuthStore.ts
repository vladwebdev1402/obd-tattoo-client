import { AuthApi, TokenApi } from "@/api";
import { configure, makeAutoObservable } from "mobx";

class AuthStore {
    message: string = "";
    error: string = "";
    successfully: boolean  = false;
    auth: boolean = false;
    isLoadingComplete: boolean = false;

    constructor() {
        makeAutoObservable(this);
        configure(
            {
                enforceActions: "never"
            }
        )
    }

    signup = async (login: string, password: string, repeatPassword: string) => {
        if (password !== repeatPassword) {
            this.message = "Пароли не совпадают"
            return;
        }
        this.isLoadingComplete = false;
        try {
            const response = await AuthApi.signup(login, password);
            this.message = response.errors ? response.errors.errors[0].msg : response.message;
            this.successfully = response.successfully;
            this.isLoadingComplete = true;
        }
        catch (err) {
            if (err instanceof Error) this.error = err.message;
            else if (typeof err === "string") this.error = err;
            this.successfully = false;
            this.isLoadingComplete = true;
        } finally {
            this.isLoadingComplete = true;
        }
    }

    login = async (login: string, password: string) => {
        this.isLoadingComplete = false;
        try {
            const response = await AuthApi.login(login, password);
            this.message = response.message;
            this.successfully = response.successfully;
            this.isLoadingComplete = true;
            
            if (this.successfully) {
                this.auth = true
                TokenApi.setToken(response.token);
            };
            
        }
        catch (err) {
            if (err instanceof Error) this.error = err.message;
            else if (typeof err === "string") this.error = err;
            this.successfully = false;
            this.isLoadingComplete = true;
        } finally {
            this.isLoadingComplete = true;
        }
    }

    clear = () => {
        this.message = "";
        this.error = "";
        this.successfully = false;
    }

    checkAuth = () => {
        if (TokenApi.getToken()) {
            this.isLoadingComplete = true;
            this.auth = true
        };
        this.isLoadingComplete = true;
    }

}

export default new AuthStore();