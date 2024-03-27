import axios from "axios";
import { Clinic } from "../../interfaces/interfaces";
import { API_URL_STRAPI } from "../../constants/endpoints";
import { LocationAppointment } from "../../interfaces/Appointment/appointmentFullPopulate";

const locationAppointment = {
  getAlllocationAppointment: async (
    userId: number | string = 1
  ): Promise<LocationAppointment> => {
    const response = await axios.get<LocationAppointment>(
      `${API_URL_STRAPI}/location-appointments?filters[user_id][id][$eq]=${userId}`
    );
    return response.data;
  },

  getlocationAppointmentById: async (
    id: number
  ): Promise<LocationAppointment> => {
    const response = await axios.get<LocationAppointment>(
      `${API_URL_STRAPI}/location-appointments/${id}`
    );
    return response.data;
  },

  addlocationAppointment: async (
    locationAppointment: LocationAppointment
  ): Promise<Clinic> => {
    const response = await axios.post<Clinic>(
      `${API_URL_STRAPI}/location-appointments`,
      locationAppointment
    );
    return response.data;
  },

  updatelocationAppointment: async (
    id: number,
    locationAppointment: Clinic
  ): Promise<Clinic> => {
    const response = await axios.put<Clinic>(
      `${API_URL_STRAPI}/location-appointments/${id}`,
      locationAppointment
    );
    return response.data;
  },

  deleteService: async (id: number): Promise<void> => {
    await axios.delete(`${API_URL_STRAPI}/location-appointments/${id}`);
  },
};

export default locationAppointment;
