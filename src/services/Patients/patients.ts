import axios from "axios";
import { Patient } from "../../interfaces/interfaces";

const API_URL = "URL_DEL_API"; // Reemplaza con la URL de tu API

const patientService = {
  getAllPatients: async (): Promise<Patient[]> => {
    const response = await axios.get<Patient[]>(`${API_URL}/patients`);
    return response.data;
  },

  getPatientById: async (id: number): Promise<Patient> => {
    const response = await axios.get<Patient>(`${API_URL}/patients/${id}`);
    return response.data;
  },

  addPatient: async (patient: Patient): Promise<Patient> => {
    const response = await axios.post<Patient>(`${API_URL}/patients`, patient);
    return response.data;
  },

  updatePatient: async (id: number, patient: Patient): Promise<Patient> => {
    const response = await axios.put<Patient>(
      `${API_URL}/patients/${id}`,
      patient
    );
    return response.data;
  },

  deletePatient: async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/patients/${id}`);
  },
};

export default patientService;
