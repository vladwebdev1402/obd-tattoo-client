import { IOrder } from "@/types/entity/IOrder";
import BaseStore from "../BaseStore";
import { OrderApi } from "@/api";
import { IContactPersonResponse } from "@/types/api/IClientResponse";
import { IBasketItem } from "@/types/entity/IBasketItem";
import { IPayment } from "@/types/entity/IPayment";
import { IDelivery } from "@/types/entity/IDelivery";

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

    placeOrder = async (contacts: IContactPersonResponse, basket: IBasketItem[], payment: string, delivery: string) => {
        this.message = "";
        try {
            const response = await OrderApi.placeOrder(contacts, basket, payment, delivery);
            this.data.push(response.data);
        }
        catch (err) {
            this.handleError(err);
            this.message = "Произошла ошибка при оформлении заказа";
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