export interface GetAppointmentFullPopulate {
  data: Datum[];
  meta: Meta;
}

export interface Datum {
  id: number;
  attributes: DatumAttributes;
}

export interface DatumAttributes {
  finish: boolean;
  paid: boolean;
  reminder_send: boolean;
  internal_code: string;
  sumary: string;
  datetime_appointment: Date;
  colour: null;
  benefit: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  appointment_type: Appointment;
  patient: Patient;
  user_id: UserID;
  profesional?: UserID; //!todo cambiar
  work_center: WorkCenter;
  appointment_status: Appointment;
  location_appointment: LocationAppointment;
}

export interface Appointment {
  data: AppointmentStatusData;
}

export interface AppointmentStatusData {
  id: number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  name: string;
  description: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface LocationAppointment {
  data: LocationAppointmentData;
}

export interface LocationAppointmentData {
  id: number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  location: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Patient {
  data: PatientData;
}

export interface PatientData {
  id: number;
  attributes: TentacledAttributes;
}

export interface TentacledAttributes {
  name: string;
  last_name: string;
  active: boolean;
  country: string;
  city: string;
  code_postal: string;
  tax_name: string;
  location: string;
  phone: string;
  isMale: boolean;
  email: string;
  notes: string;
  health_insurance: boolean;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  birthdate: null;
}

export interface UserID {
  data: UserIDData;
}

export interface UserIDData {
  id: number;
  attributes: StickyAttributes;
}

export interface StickyAttributes {
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  tax_name: string;
  location: string;
  city: string;
  code_postal: string;
  phone: string;
  id_google_test: string;
  country: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface WorkCenter {
  data: WorkCenterData;
}

export interface WorkCenterData {
  id: number;
  attributes: IndigoAttributes;
}

export interface IndigoAttributes {
  name: string;
  active: boolean;
  country: string;
  email: string;
  city: string;
  tax_name: string;
  code_postal: string;
  phone: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
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
