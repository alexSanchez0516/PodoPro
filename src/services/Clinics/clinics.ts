import axios from "axios";
import { Clinic } from "../../interfaces/interfaces";
import { API_URL_STRAPI } from "../../constants/endpoints";
import {
  GetWorkCenterAll,
  GetWorkCenterByID,
} from "../../interfaces/WorkCenter/interfacesWorkCenter";

const clinicService = {
  getAllClinics: async (): Promise<GetWorkCenterAll> => {
    const response = await axios.get<GetWorkCenterAll>(
      `${API_URL_STRAPI}/work-centers`
    );
    return response.data;
  },

  getClinicById: async (id: number): Promise<GetWorkCenterByID> => {
    const response = await axios.get<GetWorkCenterByID>(
      `${API_URL_STRAPI}/work-centers/${id}`
    );
    return response.data;
  },

  addClinic: async (clinic: Clinic): Promise<Clinic> => {
    const response = await axios.post<Clinic>(
      `${API_URL_STRAPI}/work-centers`,
      clinic
    );
    return response.data;
  },

  updateClinic: async (id: number, clinic: Clinic): Promise<Clinic> => {
    const response = await axios.put<Clinic>(
      `${API_URL_STRAPI}/work-centers/${id}`,
      clinic
    );
    return response.data;
  },

  deleteClinic: async (id: number): Promise<void> => {
    await axios.delete(`${API_URL_STRAPI}/work-centers/${id}`);
  },
};

export default clinicService;
