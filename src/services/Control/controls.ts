import axios from "axios";
import {
  ClinicRequestGET,
  ClinicRequestGETById,
  PorcentageDiscountBenefitResponseGET,
  PorcentageDiscountBenefitResponsePOST,
  ServiceRequestPOST,
  ServicesResponseGETFullPopulate,
  ServicesResponseGETFullPopulateById,
  TaxImpRequestGET,
  TaxImpRequestGETByID,
  TaxImpRequestPOST,
  WorkCentersRequestPOST,
} from "../../interfaces/interfaces";
import { API_URL_STRAPI } from "../../constants/endpoints";

const controlsService = {
  getAllPorcentageDiscount:
    async (): Promise<PorcentageDiscountBenefitResponseGET> => {
      const response = await axios.get<PorcentageDiscountBenefitResponseGET>(
        `${API_URL_STRAPI}/porcentage-discounts`
      );
      return response.data;
    },
  getPorcentageDiscountById: async (
    id: number | string
  ): Promise<PorcentageDiscountBenefitResponseGET> => {
    const response = await axios.get<PorcentageDiscountBenefitResponseGET>(
      `${API_URL_STRAPI}/porcentage-discounts/${id}`
    );
    return response.data;
  },
  createAllPorcentageDiscount: async (
    body: any
  ): Promise<PorcentageDiscountBenefitResponsePOST> => {
    const response = await axios.post<PorcentageDiscountBenefitResponsePOST>(
      `${API_URL_STRAPI}/porcentage-discounts`,
      body
    );
    return response.data;
  },

  getAllPorcentageBenefit:
    async (): Promise<PorcentageDiscountBenefitResponseGET> => {
      const response = await axios.get<PorcentageDiscountBenefitResponseGET>(
        `${API_URL_STRAPI}/porcentage-employees`
      );
      return response.data;
    },
  getPorcentageBenefitById: async (
    id: number | string
  ): Promise<PorcentageDiscountBenefitResponseGET> => {
    const response = await axios.get<PorcentageDiscountBenefitResponseGET>(
      `${API_URL_STRAPI}/porcentage-employees/${id}`
    );
    return response.data;
  },
  createAllPorcentageBenefit:
    async (): Promise<PorcentageDiscountBenefitResponseGET> => {
      const response = await axios.get<PorcentageDiscountBenefitResponseGET>(
        `${API_URL_STRAPI}/porcentage-employees`
      );
      return response.data;
    },
  getAllTaxes: async (): Promise<TaxImpRequestGET> => {
    const response = await axios.get<TaxImpRequestGET>(
      `${API_URL_STRAPI}/taxes-imps`
    );
    return response.data;
  },
  getTaxeById: async (id: number | string): Promise<TaxImpRequestGETByID> => {
    const response = await axios.get<TaxImpRequestGETByID>(
      `${API_URL_STRAPI}/taxes-imps/${id}`
    );
    return response.data;
  },
  createTaxe: async (): Promise<TaxImpRequestPOST> => {
    const response = await axios.post<TaxImpRequestPOST>(
      `${API_URL_STRAPI}/taxes-imps`
    );
    return response.data;
  },

  getAllWorkCenters: async (): Promise<ClinicRequestGET> => {
    const response = await axios.get<ClinicRequestGET>(
      `${API_URL_STRAPI}/work-centers?populate=*`
    );
    return response.data;
  },
  getWorkCenterById: async (
    id: number | string
  ): Promise<ClinicRequestGETById> => {
    const response = await axios.get<ClinicRequestGETById>(
      `${API_URL_STRAPI}/work-centers/${id}`
    );
    return response.data;
  },
  createWorkCenter: async (
    body: WorkCentersRequestPOST
  ): Promise<WorkCentersRequestPOST> => {
    const response = await axios.post<WorkCentersRequestPOST>(
      `${API_URL_STRAPI}/work-centers`,
      body
    );
    return response.data;
  },

  getAllServices: async (): Promise<ServicesResponseGETFullPopulate> => {
    const response = await axios.get<ServicesResponseGETFullPopulate>(
      `${API_URL_STRAPI}/services?populate=*`
    );
    return response.data;
  },
  getServicesById: async (
    id: number | string
  ): Promise<ServicesResponseGETFullPopulateById> => {
    const response = await axios.get<ServicesResponseGETFullPopulateById>(
      `${API_URL_STRAPI}/services/${id}`
    );
    return response.data;
  },
  creatServices: async (
    body: ServiceRequestPOST
  ): Promise<ServiceRequestPOST> => {
    const response = await axios.post<ServiceRequestPOST>(
      `${API_URL_STRAPI}/services`,
      body
    );
    return response.data;
  },
};

export default controlsService;
