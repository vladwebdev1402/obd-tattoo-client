import { IContactPerson } from "@/types/entity/contactPerson";
import BaseStore from "../BaseStore";
import {
  IContactPersonResponse,
  IProfile,
} from "@/types/api/IClientResponse";
import { ClientApi } from "@/api";

class IProfileStore extends BaseStore<IProfile> {
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
