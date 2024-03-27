import axios from "axios";
import { API_URL_STRAPI } from "../../constants/endpoints";
import { AppointmentLine } from "../../interfaces/Appointment/appointmentLineFullPopulate";

const appointmentLines = {
  getAppointmentLinesByAppointment: async (
    idAppoimentId: number | string,
    userId: number | string = 1
  ): Promise<AppointmentLine> => {
    const response = await axios.get<AppointmentLine>(
      `${API_URL_STRAPI}/appointment-lines?filters[user_id][id][$eq]=${userId}&filters[appointment][id][$eq]=${idAppoimentId}&populate=*`
    );
    return response.data;
  },

  getlocationAppointmentById: async (id: number): Promise<AppointmentLine> => {
    const response = await axios.get<AppointmentLine>(
      `${API_URL_STRAPI}/appointment-lines/${id}`
    );
    return response.data;
  },

  addlocationAppointment: async (
    locationAppointment: AppointmentLine
  ): Promise<AppointmentLine> => {
    const response = await axios.post<AppointmentLine>(
      `${API_URL_STRAPI}/appointment-lines`,
      locationAppointment
    );
    return response.data;
  },

  updatelocationAppointment: async (
    id: number,
    locationAppointment: AppointmentLine
  ): Promise<AppointmentLine> => {
    const response = await axios.put<AppointmentLine>(
      `${API_URL_STRAPI}/appointment-lines/${id}`,
      locationAppointment
    );
    return response.data;
  },

  deleteService: async (id: number): Promise<void> => {
    await axios.delete(`${API_URL_STRAPI}/appointment-lines/${id}`);
  },
};

export default appointmentLines;
