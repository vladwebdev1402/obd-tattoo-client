import { IPromocode } from "@/types/entity/IPromocode";
import BaseStore from "../BaseStore";
import { PromocodeApi } from "@/api";

class IPromocodeStore extends BaseStore<IPromocode[]> { 
    getAll = async () => {
        this.message = "";
        try {
            const response = await PromocodeApi.getAll();
            this.data = response.data;
        }
        catch (err) {
            this.handleError(err);
        }
        finally {
            this.isLoadingComplete = true;
        }
    }

    checkPromocode = async (promocode: string) => {
        this.message = "Проверка промокода";
        try {
            const response = await PromocodeApi.checkPromocode(promocode);
            this.message = response.message;
        }
        catch (err) {
            this.handleError(err);
            this.message = "Произошла ошибка на сервере";
        }
        finally {
            this.isLoadingComplete = true;
        }
    }



}
const PromocodeStore = new IPromocodeStore([])
export default PromocodeStore;