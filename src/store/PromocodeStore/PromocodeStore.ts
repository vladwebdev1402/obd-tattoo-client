import { IPromocode } from "@/types/entity/IPromocode";
import BaseStore from "../BaseStore";
import { PromocodeApi } from "@/api";

class IPromocodeStore extends BaseStore<IPromocode[]> { 
    discount: number = 0;
    _id: string = "";
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
            this.discount = response.data.discount;
            this._id = response.data._id;
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

    clear = () => {
        this.discount = 0;
        this._id = "";
    }



}
const PromocodeStore = new IPromocodeStore([])
export default PromocodeStore;