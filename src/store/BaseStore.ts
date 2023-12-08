import { configure, makeObservable, observable } from "mobx";

class BaseStore<T> {
    data: T[] = [];
    message: string = "";
    error: string = "";
    isLoadingComplete: boolean = false;

    constructor() {
        makeObservable(this, {
            data: observable,
            message: observable,
            error: observable,
            isLoadingComplete: observable,
        });
        configure({
            enforceActions: "never",
        })
    }

    handleError = (error: any) => {
        if (error instanceof Error) this.error = error.message;
        else if (typeof error === "string") this.error = error;
    }
}

export default BaseStore;