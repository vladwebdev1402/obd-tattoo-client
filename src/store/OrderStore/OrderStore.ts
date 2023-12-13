import { IOrder } from "@/types/entity/IOrder";
import BaseStore from "../BaseStore";
import { OrderApi } from "@/api";

class IOrderStore extends BaseStore<IOrder[]> {
    getAll = async () => {
        try {
            const response = await OrderApi.getAll();
            this.data = response.data;
            this.message = response.message;
        }
        catch (err) {
            this.handleError(err);
        }
        finally {
            this.isLoadingComplete = true;
        }
    }
}

const OrderStore = new IOrderStore([]);

export default OrderStore;