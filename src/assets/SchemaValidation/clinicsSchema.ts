import * as Yup from "yup";
export const clinicValidationSchemaEdit = Yup.object().shape({
  clinics: Yup.array().of(
    Yup.object().shape({
      id: Yup.number(),
      name: Yup.string().required("El nombre de la clínica es obligatorio"),
      location: Yup.string().required(
        "La ubicación de la clínica es obligatoria"
      ),
      phone: Yup.string().required(
        "El número de teléfono de la clínica es obligatorio"
      ),
      updated_at: Yup.date(),
      created_at: Yup.date(),
      active: Yup.boolean(),
    })
  ),
});
export const clinicValidationSchemaCreate = Yup.object().shape({
  clinics: Yup.object().shape({
    id: Yup.number(),
    name: Yup.string().required("El nombre de la clínica es obligatorio"),
    location: Yup.string().required(
      "La ubicación de la clínica es obligatoria"
    ),
    phone: Yup.string().required(
      "El número de teléfono de la clínica es obligatorio"
    ),
    updated_at: Yup.date(),
    created_at: Yup.date(),
    active: Yup.boolean(),
  }),
});
