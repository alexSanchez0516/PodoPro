import axios from "axios";
import { Appointment } from "../../interfaces/interfaces";

const API_URL = "URL_DEL_API"; // Reemplaza con la URL de tu API

const appointmentService = {
  getAllAppointments: async (): Promise<Appointment[]> => {
    const response = await axios.get<Appointment[]>(`${API_URL}/appointments`);
    return response.data;
  },

  getAppointmentById: async (id: number): Promise<Appointment> => {
    const response = await axios.get<Appointment>(
      `${API_URL}/appointments/${id}`
    );
    return response.data;
  },

  addAppointment: async (appointment: Appointment): Promise<Appointment> => {
    const response = await axios.post<Appointment>(
      `${API_URL}/appointments`,
      appointment
    );
    return response.data;
  },

  updateAppointment: async (
    id: number,
    appointment: Appointment
  ): Promise<Appointment> => {
    const response = await axios.put<Appointment>(
      `${API_URL}/appointments/${id}`,
      appointment
    );
    return response.data;
  },

  deleteAppointment: async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/appointments/${id}`);
  },
};

export default appointmentService;
