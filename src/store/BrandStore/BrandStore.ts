import { IBrand } from "@/types/IBrand";
import BaseStore from "../BaseStore";
import { BrandApi } from "@/api";

class BrandStore extends BaseStore<IBrand> {
    
    getAll = async () => {
        this.isLoadingComplete = false;

        try {
            const response = await BrandApi.getAll();
            this.data = response.data;
            this.message = response.message;
        }
        catch (err) {
            this.handleError(err)
        } finally {
            this.isLoadingComplete = true;
        }

    }

}

export default new BrandStore()