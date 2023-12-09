import { ItemApi } from "@/api";
import { IShopItem } from "@/types/shopItem";
import { configure, makeAutoObservable } from "mobx";

class ItemPageStore {

    item: IShopItem | null = null;
    brandItems: IShopItem[] = [];
    categoryItems: IShopItem[] = [];
    isLoadingComplete: boolean = false;
    error: string = "";

    constructor() {
        makeAutoObservable(this);
        configure({
            enforceActions: "never"
        })
    }

    getAll = async (_id: string) => {
        this.isLoadingComplete = false;
        try {
            this.item = (await ItemApi.getItemById(_id)).data[0];
            this.brandItems = (await ItemApi.getAll({brand: this.item.brand})).data;
            this.categoryItems = (await ItemApi.getAll({category: this.item.category})).data;
        }
        catch (err) {
            this.handleError(err);
        }
        finally {
            this.isLoadingComplete = true;
        }
    }

    handleError = (error: any) => {
        if (error instanceof Error) {
            this.error = error.message
        }
        else if (typeof error === "string") this.error = error;
    }
}

export default new ItemPageStore();