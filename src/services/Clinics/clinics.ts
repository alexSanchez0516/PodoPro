import axios from "axios";
import { Clinic } from "../../interfaces/interfaces";

const API_URL = "URL_DEL_API"; // Reemplaza con la URL de tu API

const clinicService = {
  getAllClinics: async (): Promise<Clinic[]> => {
    const response = await axios.get<Clinic[]>(`${API_URL}/clinics`);
    return response.data;
  },

  getClinicById: async (id: number): Promise<Clinic> => {
    const response = await axios.get<Clinic>(`${API_URL}/clinics/${id}`);
    return response.data;
  },

  addClinic: async (clinic: Clinic): Promise<Clinic> => {
    const response = await axios.post<Clinic>(`${API_URL}/clinics`, clinic);
    return response.data;
  },

  updateClinic: async (id: number, clinic: Clinic): Promise<Clinic> => {
    const response = await axios.put<Clinic>(
      `${API_URL}/clinics/${id}`,
      clinic
    );
    return response.data;
  },

  deleteClinic: async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/clinics/${id}`);
  },
};

export default clinicService;
