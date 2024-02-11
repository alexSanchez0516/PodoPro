export interface Patient {
  id?: number | null;
  name?: string | null;
  last_name?: string | null;
  email?: string | null;
  phone?: string | null;
  updated_at?: string | null;
  created_at?: string | null;
  active?: boolean | null;
}
export interface Clinic {
  id?: number | null;
  name?: string | null;
  location?: string | null;
  phone?: string | null;
  updated_at?: string | null;
  created_at?: string | null;
  active?: boolean | null;
}

export interface Bill {
  id?: number | null;
  num_internal_bill?: number | null;
  num_external_bill?: number | null;
  amount?: number | null;
  benefit?: number | null;
  updated_at?: string | null;
  created_at?: string | null;
  active?: boolean | null;
}

export interface LoginRequest {
  identifier: string;
  password: string;
}
export interface LoginResponse {
  jwt: string;
  user: User;
}

export interface User {
  user: any;
  id: number | null;
  username: string | null;
  email: string | null;
  provider: string | null;
  confirmed: boolean | null;
  blocked: boolean | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  tax_name: string | null;
  location: string | null;
  city: string | null;
  code_postal: string | null;
  phone: string | null;
  id_google_test: string | null;
  country: string | null;
  isAuth?: boolean;
}

export interface PorcentageDiscountBenefitResponsePOST {
  data: DataPorcentageDiscountResponsePOST;
  meta: any;
}

export interface DataPorcentageDiscountResponsePOST {
  id: number;
  attributes: AttributesPorcentageDiscountResponsePOST;
}

export interface AttributesPorcentageDiscountResponsePOST {
  porcentage_value: number;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface PorcentageDiscountBenefitResponseGET {
  data: DatumPorcentageDiscountResponseGET[];
  meta: Meta;
}

export interface PorcentageDiscountBenefitResponseGETByID {
  data: DatumPorcentageDiscountResponseGET;
  meta: Meta;
}

export interface DatumPorcentageDiscountResponseGET {
  id: number;
  attributes: AttributesPorcentageDiscountResponseGET;
}

export interface AttributesPorcentageDiscountResponseGET {
  porcentage_value: number;
  active: boolean;
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

export interface DatumPorcentageDiscountBenefitResponseGETForComponetList {
  id: number;
  porcentage_value: number;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface ServicesResponseGETFormComponetList {
  id: number;
  name: string;
  description: string;
  price_unit: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  paid_insurance: boolean;
  img: any;
  work_center_id: number;
  work_center_name: string;
  porcentage_employee_id: number;
  porcentage_employee_porcentage_value: number;
  id_porcentage_discount: number;
  porcentage_discount_porcentage_value: number;
}
export interface DatumTaxesResponseGETForComponetList {
  id: number;
  name: string;
  porcentage: number;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface WorkCenterType {
  id: number;
  name: string;
}

export interface DatumWorkCenterResponseGETForComponetList {
  id: number;
  name: string;
  active: boolean;
  country: string;
  email: string;
  city: string;
  tax_name: string;
  code_postal: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  address: string;
  patients: any[]; // Puedes ajustar este tipo según la estructura real de los datos de pacientes
  services: any[]; // Puedes ajustar este tipo según la estructura real de los datos de servicios
  nameTypeClinic: string;
  idTypeClinic: string | number;
}

export interface ServiceRequestPOST {
  data: {
    name: string;
    description: string;
    price_unit: number;
    active: boolean;
    admin_user: string | number;
    img: string | number | null;
    work_center: string | number;
    porcentage_employee: string | number;
    porcentage_discount: string | number;
    paid_insurance: boolean;
  };
}

export interface ServicesResponseGET {
  data: DatumServicesResponseGET[];
  meta: Meta;
}
export interface ServicesResponseGETById {
  data: DatumServicesResponseGET;
  meta: Meta;
}

export interface DatumServicesResponseGET {
  id: number;
  attributes: AttributesServicesResponseGET;
}

export interface AttributesServicesResponseGET {
  name: string;
  description: string;
  price_unit: number;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  paid_insurance: boolean;
}

export interface TaxImpRequestPOST {
  data: {
    name: string;
    porcentage: number;
    active: boolean;
  };
}

export interface TaxImpRequestGET {
  data: DatumTaxImpRequestGET[];
  meta: Meta;
}

export interface TaxImpRequestGETByID {
  data: DatumTaxImpRequestGET;
  meta: Meta;
}

export interface DatumTaxImpRequestGET {
  id: number;
  attributes: AttributesTaxImpRequestGET;
}

export interface AttributesTaxImpRequestGET {
  name: string;
  porcentage: number;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface WorkCentersRequestPOST {
  data: {
    name: string;
    active: boolean;
    country: string;
    email: string;
    city: string;
    tax_name: string;
    code_postal: string;
    phone: string;
    admin_user: string | number; // It can be either string or number (id)
    admin_users: (string | number)[];
    patients: (string | number)[];
    services: (string | number)[];
    address: string;
    work_center_type: string | number;
  };
}

interface WorkCentersData {
  id: number;
  attributes: {
    name: string;
    active: boolean;
    country: string;
    email: string;
    city: string;
    tax_name: string;
    code_postal: string;
    phone: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    address: string;
    patients: {
      //TODO
      data: any[]; // Puedes ajustar este tipo según la estructura real de los datos de pacientes
    };
    services: {
      data: any[]; // Puedes ajustar este tipo según la estructura real de los datos de servicios
    };
    work_center_type: {
      data: {
        id: number;
        attributes: {
          name: string;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
          active: boolean;
        };
      };
    };
  };
}

export interface ClinicRequestGET {
  data: WorkCentersData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
export interface ClinicRequestGETById {
  data: WorkCentersData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface ServicesResponseGETFullPopulate {
  data: DatumServicesResponseGETFullPopulate[];
  meta: Meta;
}
export interface ServicesResponseGETFullPopulateById {
  data: DatumServicesResponseGETFullPopulate;
  meta: Meta;
}

export interface DatumServicesResponseGETFullPopulate {
  id: number;
  attributes: DatumAttributesFullPopulate;
}

export interface DatumAttributesFullPopulate {
  name: string;
  description: string;
  price_unit: number;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  paid_insurance: boolean;
  img: RelationFullPopulateServiceResponseGET;
  work_center: RelationFullPopulateServiceResponseGET;
  porcentage_employee: RelationFullPopulateServiceResponseGET;
  porcentage_discount: RelationFullPopulateServiceResponseGET;
}

export interface RelationFullPopulateServiceResponseGET {
  data: AttributesDatumServicesResponseGETFullPopulate | null;
}

export interface AttributesDatumServicesResponseGETFullPopulate {
  id: number;
  attributes: DataAttributesDatumServicesResponseGETFullPopulate;
}

export interface DataAttributesDatumServicesResponseGETFullPopulate {
  porcentage_value?: number;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  name?: string;
  country?: string;
  email?: string;
  city?: string;
  tax_name?: string;
  code_postal?: string;
  phone?: string;
  address?: string;
}

export interface PatientResponsePOST {
  data: DataPatientResponsePOST;
}

export interface DataPatientResponsePOST {
  name: string;
  last_name: string;
  active: boolean;
  country: string;
  city: string;
  code_postal: string;
  tax_name: string;
  location: string;
  work_centers: number[];
  phone: string;
  isMale: boolean;
  email: string;
  history_clinic: null;
  notes: string;
  img_profile: null;
  health_insurance: boolean;
}

export interface PatientResponseGETFullPopulate {
  data: PatientResponseGETFullPopulateDatum[];
  meta: Meta;
}

export interface PatientResponseGETFullPopulateDatum {
  id: number;
  attributes: PurpleAttributesPatientResponseGETFullPopulateDatum;
}

export interface PurpleAttributesPatientResponseGETFullPopulateDatum {
  name: string;
  last_name: string;
  active: boolean;
  country: string;
  city: string;
  code_postal: string;
  tax_name: string;
  location: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  phone: string;
  isMale: boolean;
  email: string;
  notes: string;
  work_centers: HistoryClinic;
  history_clinic: HistoryClinic;
  img_profile: any;
  health_insurance: boolean;
}

export interface HistoryClinic {
  data: any | null;
}

export interface AppointmentRequestGetPopulateByID {
  data: DataAppointmentRequestGetPopulateByID;
  meta: Meta;
}

export interface DataAppointmentRequestGetPopulateByID {
  id: number;
  attributes: DataAttributesAppointmentRequestGetPopulateByID;
}

export interface DataAttributesAppointmentRequestGetPopulateByID {
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
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  work_centers: DatumAppointmentRequestGetPopulateByID;
  history_clinic: any;
  img_profile: any;
  health_insurance: boolean;
}

export interface DatumAppointmentRequestGetPopulateByID {
  id: number;
  attributes: DatumAttributesAppointmentRequestGetPopulateByID;
}

export interface DatumAttributesAppointmentRequestGetPopulateByID {
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
