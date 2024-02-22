export interface GetWorkCenterByID {
  data: Data;
  meta: Meta;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
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

export interface Meta {}

export interface GetWorkCenterAll {
  data: DatumGetWorkCenterAll[];
  MetaGetWorkCenterAll: Meta;
}

export interface DatumGetWorkCenterAll {
  id: number;
  attributes: AttributesGetWorkCenterAll;
}

export interface AttributesGetWorkCenterAll {
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

export interface MetaGetWorkCenterAll {
  pagination: PaginationGetWorkCenterAll;
}

export interface PaginationGetWorkCenterAll {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
