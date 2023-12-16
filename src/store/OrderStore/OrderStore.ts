import { IOrder } from "@/types/entity/IOrder";
import BaseStore from "../BaseStore";
import { OrderApi } from "@/api";
import { IPayment } from "@/types/entity/IPayment";
import { IDelivery } from "@/types/entity/IDelivery";
import { IPostPlaceOrder } from "@/types/api/IPostPlaceOrder";
import ProfileStore from "../ProfileStore/ProfileStore";
import PromocodeStore from "../PromocodeStore/PromocodeStore";

class IOrderStore extends BaseStore<IOrder[]> {
    payment: IPayment[] = [];
    delivery: IDelivery[] = [];
    getAll = async () => {
        this.message = "";
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

    placeOrder = async (payload: IPostPlaceOrder): Promise<number> => {
        this.message = "";
        try {
            const response = await OrderApi.placeOrder(payload);
            this.data.push(response.data);
            ProfileStore.clearBasket();
            PromocodeStore.clear();
            return response.data.number;
        }
        catch (err) {
            this.handleError(err);
            this.message = "Произошла ошибка при оформлении заказа";
            throw new Error("Произошла ошибка при оформлении заказа")
            return 0;
        }
        finally {
            this.isLoadingComplete = true;
        }
    }

    getPayment = async () => {
        this.message = "";
        try {
            const response = await OrderApi.getPayment();
            this.payment = response.data;
        }
        catch (err) {
            this.handleError(err);
        }
        finally {
            this.isLoadingComplete = true;
        }
    }

    getDelivery = async () => {
        this.message = "";
        try {
            const response = await OrderApi.getDelivery();
            this.delivery = response.data;
        }
        catch (err) {
            this.handleError(err);
        }
        finally {
            this.isLoadingComplete = true;
        }
    }

    setMessage = (msg: string) => {
        this.message = msg;
    }
    

}

const OrderStore = new IOrderStore([]);

export default OrderStore;