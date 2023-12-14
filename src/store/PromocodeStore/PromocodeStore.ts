import { IPromocode } from "@/types/entity/IPromocode";
import BaseStore from "../BaseStore";
import { PromocodeApi } from "@/api";

class IPromocodeStore extends BaseStore<IPromocode[]> { 
    getAll = async () => {
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
}
const PromocodeStore = new IPromocodeStore([])
export default PromocodeStore;