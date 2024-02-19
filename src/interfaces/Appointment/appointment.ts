
export interface AppointmentRequestPOST {
  data: Data;
}

//!cambiar
export interface Data {
  id?: string | number;
  appointment_type: string | number | null;
  patient: string | number | null;
  employee: string | number;
  work_center: string | number;
  finish: boolean;
  paid: boolean;
  reminder_send: boolean;
  external_num_invoice: string | null;
  internal_num_invoice: string | null;
  health_insurance: boolean;
  internal_code: string | null;
  appointment_status: string | number;
  sumary: string;
  location_appointment: string | number;
  datetime_appointment: Date;
  colour: string | null;
  paid_all_insurance: boolean | null;
  date_paid: Date | null;
  services: (string | number)[];
  benefit: number;
}

//!cambiar
export interface AppointmentData {
  employee_id: number;
  employee_email: string;
  employee_username: string;
  id: number;
  finish: boolean;
  paid: boolean;
  reminder_send: boolean;
  external_num_invoice: string;
  internal_num_invoice: string;
  health_insurance: boolean;
  internal_code: string;
  sumary: string;
  datetime_appointment: Date;
  colour: string;
  paid_all_insurance: boolean;
  date_paid: Date;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  appointment_type_name: string;
  appointment_type_id: string | number;
  patient_id: string | number;
  patient_name: string;
  patient_last_name: string;
  patient_active: boolean;
  patient_country: string;
  patient_city: string;
  patient_code_postal: string;
  patient_tax_name: string;
  patient_location: string;
  patient_phone: string;
  patient_isMale: boolean;
  patient_email: string;
  patient_notes: string;
  patient_createdAt: Date;
  patient_updatedAt: Date;
  patient_publishedAt: Date;
  work_center_id: number;
  work_center_name: string;
  work_center_active: boolean;
  work_center_country: string;
  work_center_email: string;
  work_center_city: string;
  work_center_tax_name: string;
  work_center_code_postal: string;
  work_center_phone: string;
  work_center_address: string;
  work_center_createdAt: Date;
  work_center_updatedAt: Date;
  work_center_publishedAt: Date;
  appointment_status_id: number;
  appointment_status_name: string;
  appointment_status_description: string;
  appointment_status_active: boolean;
  appointment_status_createdAt: Date;
  appointment_status_updatedAt: Date;
  appointment_status_publishedAt: Date;
  location_appointment_id: number;
  location_appointment_location: string;
  location_appointment_active: boolean;
  location_appointment_createdAt: Date;
  location_appointment_updatedAt: Date;
  location_appointment_publishedAt: Date;
  benefit: number;
}
