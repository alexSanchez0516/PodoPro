export interface UserAuthFullPopulateByID {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  tax_name: null;
  location: null;
  city: null;
  code_postal: null;
  phone: null;
  id_google_test: null;
  country: null;
  createdAt: Date;
  updatedAt: Date;
  work_centers: WorkCenter[];
  isAuth: boolean;
}

export interface WorkCenter {
  id: number;
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
