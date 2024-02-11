import axios from "axios";
import {
  AppointmentRequestGetPopulateByID,
  Patient,
  PatientResponseGETFullPopulate,
} from "../../interfaces/interfaces";
import { API_URL_STRAPI } from "../../constants/endpoints";

const patientService = {
  getAllPatients: async (): Promise<PatientResponseGETFullPopulate> => {
    const response = await axios.get<PatientResponseGETFullPopulate>(
      `${API_URL_STRAPI}/patients?populate=*`
    );
    return response.data;
  },

  getPatientById: async (
    id: number | string
  ): Promise<AppointmentRequestGetPopulateByID> => {
    const response = await axios.get<AppointmentRequestGetPopulateByID>(
      `${API_URL_STRAPI}/patients/${id}?populate=*`
    );
    return response.data;
  },

  addPatient: async (patient: Patient): Promise<Patient> => {
    const response = await axios.post<Patient>(
      `${API_URL_STRAPI}/patients`,
      patient
    );
    return response.data;
  },

  updatePatient: async (id: number, patient: Patient): Promise<Patient> => {
    const response = await axios.put<Patient>(
      `${API_URL_STRAPI}/patients/${id}`,
      patient
    );
    return response.data;
  },

  deletePatient: async (id: number): Promise<void> => {
    await axios.delete(`${API_URL_STRAPI}/patients/${id}`);
  },
};

export default patientService;
