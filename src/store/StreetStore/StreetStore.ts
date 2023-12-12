import { IStreet } from "@/types/entity/IStreet";
import BaseStore from "../BaseStore";
import { StreetApi } from "@/api";
import { IDropdownValue } from "@/types/entity/IDropdownValue";

class IStreetStore extends BaseStore<IStreet[]> {
  getAll = async () => {
    try {
      const response = await StreetApi.getAll();
      this.data = response.data;
      this.message = response.message;
    } catch (error) {
      this.handleError(error);
    } finally {
      this.isLoadingComplete = true;
    }
  };

}

const StreetStore = new IStreetStore([]);
export default StreetStore;
