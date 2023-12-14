import { IContactPerson } from "@/types/entity/contactPerson";
import BaseStore from "../BaseStore";
import { IContactPersonResponse, IProfile } from "@/types/api/IClientResponse";
import { ClientApi, ItemApi } from "@/api";
import { BasketApi } from "@/api/BasketApi/BasketApi";
import { makeObservable, observable } from "mobx";

class IProfileStore extends BaseStore<IProfile> {
  allPrice = 0;
  count = 0;

  constructor(initValue: IProfile) {
    super(initValue);
    makeObservable(this, {
      allPrice: observable,
      count: observable,
    });
  }
  getProfile = async () => {
    this.message = "";
    try {
      const response = await ClientApi.getProfile();
      this.data = response.data;
    } catch (error) {
      this.handleError(error);
    } finally {
      this.isLoadingComplete = true;
    }
  };

  putProfile = async (profile: IContactPersonResponse) => {
    try {
      const response = await ClientApi.putProfile(profile);
      this.data = { ...this.data, ...profile };
      this.message = response.message;
    } catch (error) {
      this.handleError(error);
    } finally {
      this.isLoadingComplete = true;
    }
  };

  plusItemToBasket = async (item: string) => {
    try {
      const basketitem = this.data.basket.filter((i) => i.item === item)[0];
      if (basketitem !== undefined) {
        const response = await BasketApi.changeItemInBasket({
          item,
          count: basketitem.count + 1,
        });
        this.data.basket = response.data;
      } else {
        const response = await BasketApi.changeItemInBasket({ item, count: 1 });
        this.data.basket = response.data;
      }
    } catch (err) {
      this.handleError(err);
    }
  };

  minusItemBasket = async (item: string) => {
    try {
      const basketitem = this.data.basket.filter((i) => i.item === item)[0];
      const response = await BasketApi.changeItemInBasket({
        item,
        count: basketitem.count - 1,
      });
      this.data.basket = response.data;
    } catch (err) {
      this.handleError(err);
    }
  };

  setItemBasket = async (item: string, count: number) => {
    try {
      const response = await BasketApi.changeItemInBasket({ item, count });
      this.data.basket = response.data;
    } catch (err) {
      this.handleError(err);
    }
  };

  checkItemInBasket = (item: string): boolean => {
    const basketitem = this.data.basket.filter((i) => i.item === item)[0];
    if (basketitem !== undefined) return true;
    else return false;
  };

  getCountItemInBasket = (item: string): number => {
    const basketitem = this.data.basket.filter((i) => i.item === item)[0];
    return basketitem?.count ?? 0;
  };

  getBasketInfo = async () => {
    try {
      const response = await BasketApi.getInfoBasket();
      this.count = response.data.count;
      this.allPrice = response.data.allPrice;
    } catch (e) {
      this.handleError(e);
    }
  };

  clearBasket = () => {
    this.data.basket = [];
  };

  parseResToInputs = (): IContactPersonResponse => {
    return {
      name: this.data.name,
      surname: this.data.surname,
      patroname: this.data.patroname,
      phone: this.data.phone,
      mail: this.data.mail,
      city: this.data.city,
      street: this.data.street,
      apartament: this.data.apartament,
      entrance: this.data.entrance,
      floor: this.data.floor,
      intercom: this.data.intercom,
    };
  };

  checkValuesProfile = (data: IContactPersonResponse) => {
    return (
      data.name &&
      data.surname &&
      data.patroname &&
      data.phone &&
      data.mail &&
      data.city &&
      data.street &&
      data.apartament || false
    );
  };
}

const ProfileStore = new IProfileStore({
  name: "",
  surname: "",
  patroname: "",
  phone: "",
  mail: "",
  city: "",
  street: "",
  apartament: 0,
  entrance: 0,
  floor: 0,
  intercom: 0,
  favorites: [],
  basket: [],
});

export default ProfileStore;
