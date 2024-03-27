import axios from "axios";
import { Clinic } from "../../interfaces/interfaces";
import { API_URL_STRAPI } from "../../constants/endpoints";
import {
  GetWorkCenterAll,
  GetWorkCenterByID,
} from "../../interfaces/WorkCenter/interfacesWorkCenter";

const serviceWorkCenter = {
  getAllServices: async (): Promise<GetWorkCenterAll> => {
    const response = await axios.get<GetWorkCenterAll>(
      `${API_URL_STRAPI}/service`
    );
    return response.data;
  },

  getAllServicesByClinic: async (
    idWorkcenter: number | string,
    userId: number | string = 1
  ): Promise<GetWorkCenterAll> => {
    const response = await axios.get<GetWorkCenterAll>(
      `${API_URL_STRAPI}/services-work-centers?populate=*&filters[work_center][id][$eq]=${idWorkcenter}&filters[user_id][id][$eq]=${userId}`
    );
    return response.data;
  },

  getServiceById: async (id: number): Promise<GetWorkCenterByID> => {
    const response = await axios.get<GetWorkCenterByID>(
      `${API_URL_STRAPI}/service/${id}`
    );
    return response.data;
  },

  addService: async (service: Clinic): Promise<Clinic> => {
    const response = await axios.post<Clinic>(
      `${API_URL_STRAPI}/service`,
      service
    );
    return response.data;
  },

  updateService: async (id: number, service: Clinic): Promise<Clinic> => {
    const response = await axios.put<Clinic>(
      `${API_URL_STRAPI}/service/${id}`,
      service
    );
    return response.data;
  },

  deleteService: async (id: number): Promise<void> => {
    await axios.delete(`${API_URL_STRAPI}/work-centers/${id}`);
  },
};

export default serviceWorkCenter;
