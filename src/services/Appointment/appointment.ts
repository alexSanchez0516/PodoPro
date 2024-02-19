import axios from "axios";
import {
  AppointmentRequestPOST,
  AppointmentResponseGETFullPopulate,
  AppointmentResponseGETFullPopulateById,
} from "../../interfaces/Appointment/appointment";
import { API_URL_STRAPI } from "../../constants/endpoints";

const appointmentService = {
  getAllAppointments: async (): Promise<AppointmentResponseGETFullPopulate> => {
    const response = await axios.get<AppointmentResponseGETFullPopulate>(
      `${API_URL_STRAPI}/appointments?populate=*`
    );
    return response.data;
  },

  getAppointmentById: async (
    id: number
  ): Promise<AppointmentResponseGETFullPopulateById> => {
    const response = await axios.get<AppointmentResponseGETFullPopulateById>(
      `${API_URL_STRAPI}/appointments/${id}`
    );
    return response.data;
  },

  addAppointment: async (
    appointment: AppointmentRequestPOST
  ): Promise<AppointmentResponseGETFullPopulateById> => {
    const response = await axios.post<AppointmentResponseGETFullPopulateById>(
      `${API_URL_STRAPI}/appointments`,
      appointment
    );
    return response.data;
  },

  updateAppointment: async (
    id: number,
    appointment: AppointmentRequestPOST
  ): Promise<AppointmentResponseGETFullPopulateById> => {
    const response = await axios.put<AppointmentResponseGETFullPopulateById>(
      `${API_URL_STRAPI}/appointments/${id}`,
      appointment
    );
    return response.data;
  },

  deleteAppointment: async (id: number): Promise<void> => {
    await axios.delete(`${API_URL_STRAPI}/appointments/${id}`);
  },
};

export default appointmentService;
