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

export interface Appointment {
  id?: number | null;
  description?: number | null;
  id_clinic?: number | null;
  id_patient?: number | null;
  id_bill?: number | null;
  updated_at?: string | null;
  created_at?: string | null;
  active?: boolean | null;
}
