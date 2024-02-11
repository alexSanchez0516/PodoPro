export interface AppointmentResponseGETFullPopulate {
  data: AppointmentResponseGETFullPopulateDatum[];
  meta: Meta;
}

export interface AppointmentResponseGETFullPopulateById {
  data: AppointmentResponseGETFullPopulateDatum;
  meta: Meta;
}

export interface AppointmentResponseGETFullPopulateDatum {
  id: number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
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
  appointment_type: any;
  patient: any;
  work_center: any;
  appointment_status: any;
  location_appointment: any;
  benefit: number;
  users_permissions_user: any;
  services: any;
}

export interface AppointmentStatus {
  data: DataDatum[] | DataClass | null;
}

export interface DataDatum {
  id: number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  name: string;
  description: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  price_unit?: number;
}

export interface DataClass {
  id: number;
  attributes: DataAttributes;
}

export interface DataAttributes {
  name?: string;
  description?: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  location?: string;
  last_name?: string;
  country?: string;
  city?: string;
  code_postal?: string;
  tax_name?: string;
  phone?: string;
  isMale?: boolean;
  email?: string;
  notes?: string;
  address?: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
export interface MappedApiResponseForComponentList {
  id: number;
  finish: boolean;
  benefit: number;
  paid: boolean;
  reminder_send: boolean;
  external_num_invoice: string;
  internal_num_invoice: string;
  health_insurance: boolean;
  internal_code: string;
  sumary: string;
  datetime_appointment: string;
  colour: string;
  paid_all_insurance: boolean;
  date_paid: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  appointment_type: null;
  patient_id: number;
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
  patient_createdAt: string;
  patient_updatedAt: string;
  patient_publishedAt: string;
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
  work_center_createdAt: string;
  work_center_updatedAt: string;
  work_center_publishedAt: string;
  appointment_status_id: number;
  appointment_status_name: string;
  appointment_status_description: string;
  appointment_status_active: boolean;
  appointment_status_createdAt: string;
  appointment_status_updatedAt: string;
  appointment_status_publishedAt: string;
  location_appointment_id: number;
  location_appointment_location: string;
  location_appointment_active: boolean;
  location_appointment_createdAt: string;
  location_appointment_updatedAt: string;
  location_appointment_publishedAt: string;
  services: {
    id: number;
    name: string;
    description: string;
    price_unit: number;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }[];
}

export interface AppointmentRequestPOST {
  data: Data;
}

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
  services: Service[];
  benefit: number;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  price_unit: number;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}
