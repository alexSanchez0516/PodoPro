export interface AppointmentLine {
  data: Datum[];
  meta: Meta;
}

export interface Datum {
  id: number;
  attributes: DatumAttributes;
}

export interface DatumAttributes {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  paid: boolean | null;
  paid_with_inssurance: boolean | null;
  appointment: Appointment;
  services_work_center: ServicesWorkCenter;
  user_id: UserID;
}

export interface Appointment {
  data: AppointmentData;
}

export interface AppointmentData {
  id: number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
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
}

export interface ServicesWorkCenter {
  data: ServicesWorkCenterData;
}

export interface ServicesWorkCenterData {
  id: number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  active: boolean;
  price_unit_relation_clinic: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface UserID {
  data: UserIDData;
}

export interface UserIDData {
  id: number;
  attributes: TentacledAttributes;
}

export interface TentacledAttributes {
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

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
