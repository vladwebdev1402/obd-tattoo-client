import { ICategory } from "@/types/ICategory";
import BaseStore from "../BaseStore";
import { CategoryApi } from "@/api";

class CaregoryStore extends BaseStore<ICategory> {
    getAll = async () => {
        this.isLoadingComplete = false
        try {
            const res = await CategoryApi.getAll();
            this.data = res.data;
            this.message = res.message;
            this.error = ""
        }
        catch (e) {
            this.handleError(e);
        }
        finally {
            this.isLoadingComplete = true;
        }
    }
}

export default new CaregoryStore();