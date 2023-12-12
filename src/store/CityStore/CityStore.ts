import { ICity } from "@/types/entity/ICity";
import BaseStore from "../BaseStore";
import { CityApi } from "@/api";

class ICityStore extends BaseStore<ICity[]> {
    getAll = async () => {
        try {
            const response = await CityApi.getAll();
            this.data = response.data;
            this.message = response.message;
        }
        catch (error) {
            this.handleError(error);
        }
        finally {
            this.isLoadingComplete = true;
        }
    }

}

const CityStore = new ICityStore([]);
export default CityStore;