import { IContactPerson } from "@/types/entity/contactPerson";
import BaseStore from "../BaseStore";
import { ClientApi } from "@/api/ClientApi/ClientApi";

class IProfileStore extends BaseStore<IContactPerson> {


    getProfile = async () => {
        try {
            const response = await ClientApi.getProfile();
            this.data = response.data;
            this.message = response.message;
        } catch (error) {
            this.handleError(error);
        } finally {
            this.isLoadingComplete = true;
        }
    } 

    putProfile = async (profile: IContactPerson) => {
        try {
            const response = await ClientApi.putProfile(profile);
            this.data = [response.data];
            this.message = response.message;
        } catch (error) {
            this.handleError(error);
        } finally {
            this.isLoadingComplete = true;
        }
    } 
}


const ProfileStore = new IProfileStore();

export default ProfileStore;