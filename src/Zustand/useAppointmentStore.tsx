import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { AppointmentData } from "../interfaces/Appointment/appointment";

interface AppointmentState {
  appointment: AppointmentData | null;
  saveAppointment: (appointment: AppointmentData | null) => void;
  updateAppointment: (updatedAppointment: AppointmentData) => void;
}

export const useAppointmentStore = create<AppointmentState>(
  devtools((set) => ({
    appointment: null,
    saveAppointment: (appointment: AppointmentData) => set({ appointment }),
    updateAppointment: (updatedAppointment: AppointmentData) =>
      set((state: any) => ({
        appointment: state.appointment
          ? {
              ...state.appointment,
              ...updatedAppointment,
            }
          : null,
      })),
  })) as any
);
