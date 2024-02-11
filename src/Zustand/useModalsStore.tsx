/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { MODAL_TYPE } from "../constants/constants"; // Asumiendo que MODAL_TYPE es tu nueva interfaz

export interface State {
  [x: string]: any;
  showEditWorkCenter: boolean;
  showPatientCreate: boolean;
  showClinicCreate: boolean;
  showAppointmentCreate: boolean;
  showAppointmentEdit: boolean;
  showInvoiceCreate: boolean;
  toggleModal: (type: string) => void;
}

export const useModalsStore = create<State>()(
  devtools((set) => ({
    showEditWorkCenter: false,
    showPatientCreate: false,
    showClinicCreate: false,
    showAppointmentCreate: false,
    showAppointmentEdit: false,
    showInvoiceCreate: false,
    toggleModal: (type: string) => {
      switch (type) {
        case MODAL_TYPE.WORK_CENTER_EDIT:
          set((state) => ({
            ...state,
            showEditWorkCenter: !state.showEditWorkCenter,
          }));
          break;
        case MODAL_TYPE.PATIENT_CREATE:
          set((state) => ({
            ...state,
            showPatientCreate: !state.showPatientCreate,
          }));
          break;
        case MODAL_TYPE.CLINIC_CREATE:
          set((state) => ({
            ...state,
            showClinicCreate: !state.showClinicCreate,
          }));
          break;
        case MODAL_TYPE.APPOINTMENT_CREATE:
          set((state) => ({
            ...state,
            showAppointmentCreate: !state.showAppointmentCreate,
          }));
          break;
        case MODAL_TYPE.APPOINTMENT_EDIT:
          set((state) => ({
            ...state,
            showAppointmentEdit: !state.showAppointmentEdit,
          }));
          break;
        case MODAL_TYPE.INVOICE_CREATE:
          set((state) => ({
            ...state,
            showInvoiceCreate: !state.showInvoiceCreate,
          }));
          break;
        default:
          break;
      }
    },
  }))
);
