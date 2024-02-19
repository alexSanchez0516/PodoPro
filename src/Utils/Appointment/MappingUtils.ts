import { GetAppointmentFullPopulate } from "../../interfaces/Appointment/appointmentFullPopulate";

export const mappingDataGridAppointment: any = [
  "employee_id",
  "employee_email",
  "employee_username",
  "id",
  "finish",
  "paid",
  "reminder_send",
  "external_num_invoice",
  "internal_num_invoice",
  "health_insurance",
  "internal_code",
  "sumary",
  "datetime_appointment",
  "colour",
  "paid_all_insurance",
  "date_paid",
  "createdAt",
  "updatedAt",
  "publishedAt",
  "appointment_type_name",
  "appointment_type_id",
  "patient_id",
  "patient_name",
  "patient_last_name",
  "patient_active",
  "patient_country",
  "patient_city",
  "patient_code_postal",
  "patient_tax_name",
  "patient_location",
  "patient_phone",
  "patient_isMale",
  "patient_email",
  "patient_notes",
  "patient_createdAt",
  "patient_updatedAt",
  "patient_publishedAt",
  "work_center_id",
  "work_center_name",
  "work_center_active",
  "work_center_country",
  "work_center_email",
  "work_center_city",
  "work_center_tax_name",
  "work_center_code_postal",
  "work_center_phone",
  "work_center_address",
  "work_center_createdAt",
  "work_center_updatedAt",
  "work_center_publishedAt",
  "appointment_status_id",
  "appointment_status_name",
  "appointment_status_description",
  "appointment_status_active",
  "appointment_status_createdAt",
  "appointment_status_updatedAt",
  "appointment_status_publishedAt",
  "location_appointment_id",
  "location_appointment_location",
  "location_appointment_active",
  "location_appointment_createdAt",
  "location_appointment_updatedAt",
  "location_appointment_publishedAt",
];

export const dataForMapping = [
  "id",
  "attributes.finish",
  "attributes.paid",
  "attributes.reminder_send",
  "attributes.internal_code",
  "attributes.sumary",
  "attributes.datetime_appointment",
  "attributes.colour",
  "attributes.benefit",
  "attributes.createdAt",
  "attributes.updatedAt",
  "attributes.publishedAt",
  "attributes.appointment_type.data.id",
  "attributes.appointment_type.data.attributes.name",
  "attributes.appointment_type.data.attributes.description",
  "attributes.appointment_type.data.attributes.active",
  "attributes.appointment_type.data.attributes.createdAt",
  "attributes.appointment_type.data.attributes.updatedAt",
  "attributes.appointment_type.data.attributes.publishedAt",
  "attributes.patient.data.id",
  "attributes.patient.data.attributes.name",
  "attributes.patient.data.attributes.last_name",
  "attributes.patient.data.attributes.active",
  "attributes.patient.data.attributes.country",
  "attributes.patient.data.attributes.city",
  "attributes.patient.data.attributes.code_postal",
  "attributes.patient.data.attributes.tax_name",
  "attributes.patient.data.attributes.location",
  "attributes.patient.data.attributes.phone",
  "attributes.patient.data.attributes.isMale",
  "attributes.patient.data.attributes.email",
  "attributes.patient.data.attributes.notes",
  "attributes.patient.data.attributes.health_insurance",
  "attributes.patient.data.attributes.createdAt",
  "attributes.patient.data.attributes.updatedAt",
  "attributes.patient.data.attributes.publishedAt",
  "attributes.patient.data.attributes.birthdate",
  "attributes.user_id.data.id",
  "attributes.user_id.data.attributes.username",
  "attributes.user_id.data.attributes.email",
  "attributes.user_id.data.attributes.provider",
  "attributes.user_id.data.attributes.confirmed",
  "attributes.user_id.data.attributes.blocked",
  "attributes.user_id.data.attributes.tax_name",
  "attributes.user_id.data.attributes.location",
  "attributes.user_id.data.attributes.city",
  "attributes.user_id.data.attributes.code_postal",
  "attributes.user_id.data.attributes.phone",
  "attributes.user_id.data.attributes.id_google_test",
  "attributes.user_id.data.attributes.country",
  "attributes.user_id.data.attributes.createdAt",
  "attributes.user_id.data.attributes.updatedAt",
  "attributes.work_center.data.id",
  "attributes.work_center.data.attributes.name",
  "attributes.work_center.data.attributes.active",
  "attributes.work_center.data.attributes.country",
  "attributes.work_center.data.attributes.email",
  "attributes.work_center.data.attributes.city",
  "attributes.work_center.data.attributes.tax_name",
  "attributes.work_center.data.attributes.code_postal",
  "attributes.work_center.data.attributes.phone",
  "attributes.work_center.data.attributes.address",
  "attributes.work_center.data.attributes.createdAt",
  "attributes.work_center.data.attributes.updatedAt",
  "attributes.work_center.data.attributes.publishedAt",
  "attributes.appointment_status.data.id",
  "attributes.appointment_status.data.attributes.name",
  "attributes.appointment_status.data.attributes.description",
  "attributes.appointment_status.data.attributes.active",
  "attributes.appointment_status.data.attributes.createdAt",
  "attributes.appointment_status.data.attributes.updatedAt",
  "attributes.appointment_status.data.attributes.publishedAt",
  "attributes.location_appointment.data.id",
  "attributes.location_appointment.data.attributes.location",
  "attributes.location_appointment.data.attributes.active",
  "attributes.location_appointment.data.attributes.createdAt",
  "attributes.location_appointment.data.attributes.updatedAt",
  "attributes.location_appointment.data.attributes.publishedAt",
];

export const MappedDataAppointment = (response: GetAppointmentFullPopulate) => {
  const mappedData: any = response.data.map((dataItem: any) => ({
    user_id: dataItem.attributes?.user_id.data.id, //!creator
    user_email: dataItem.attributes?.user_id.data.attributes?.email, //!creator
    user_username: dataItem.attributes?.user_id.data.attributes?.username, //!creator
    employee_id: 12,
    employee_email: "test@test.coms",
    employee_username: "alexander",
    id: dataItem.id,
    finish: dataItem.attributes?.finish,
    paid: dataItem.attributes?.paid,
    reminder_send: dataItem.attributes?.reminder_send,
    external_num_invoice: dataItem.attributes?.external_num_invoice,
    internal_num_invoice: dataItem.attributes?.internal_num_invoice,
    health_insurance: dataItem.attributes?.health_insurance,
    internal_code: dataItem.attributes?.internal_code,
    sumary: dataItem.attributes?.sumary,
    datetime_appointment: dataItem.attributes?.datetime_appointment,
    colour: dataItem.attributes?.colour,
    paid_all_insurance: dataItem.attributes?.paid_all_insurance,
    date_paid: dataItem.attributes?.date_paid,
    createdAt: dataItem.attributes?.createdAt,
    updatedAt: dataItem.attributes?.updatedAt,
    publishedAt: dataItem.attributes?.publishedAt,
    appointment_type_name:
      dataItem.attributes?.appointment_type.data.attributes?.name,
    appointment_type_id: dataItem.attributes?.appointment_type.data.id,
    patient_id: dataItem.attributes?.patient.data.id,
    patient_name: dataItem.attributes?.patient.data.attributes?.name,
    patient_last_name: dataItem.attributes?.patient.data.attributes?.last_name,
    patient_active: dataItem.attributes?.patient.data.attributes?.active,
    patient_country: dataItem.attributes?.patient.data.attributes?.country,
    patient_city: dataItem.attributes?.patient.data.attributes?.city,
    patient_code_postal:
      dataItem.attributes?.patient.data.attributes?.code_postal,
    patient_tax_name: dataItem.attributes?.patient.data.attributes?.tax_name,
    patient_location: dataItem.attributes?.patient.data.attributes?.location,
    patient_phone: dataItem.attributes?.patient.data.attributes?.phone,
    patient_isMale: dataItem.attributes?.patient.data.attributes?.isMale,
    patient_email: dataItem.attributes?.patient.data.attributes?.email,
    patient_notes: dataItem.attributes?.patient.data.attributes?.notes,
    patient_createdAt: dataItem.attributes?.patient.data.attributes?.createdAt,
    patient_updatedAt: dataItem.attributes?.patient.data.attributes?.updatedAt,
    patient_publishedAt:
      dataItem.attributes?.patient.data.attributes?.publishedAt,
    work_center_id: dataItem.attributes?.work_center.data.id,
    work_center_name: dataItem.attributes?.work_center.data.attributes?.name,
    work_center_active:
      dataItem.attributes?.work_center.data.attributes?.active,
    work_center_country:
      dataItem.attributes?.work_center.data.attributes?.country,
    work_center_email: dataItem.attributes?.work_center.data.attributes?.email,
    work_center_city: dataItem.attributes?.work_center.data.attributes?.city,
    work_center_tax_name:
      dataItem.attributes?.work_center.data.attributes?.tax_name,
    work_center_code_postal:
      dataItem.attributes?.work_center.data.attributes?.code_postal,
    work_center_phone: dataItem.attributes?.work_center.data.attributes?.phone,
    work_center_address:
      dataItem.attributes?.work_center.data.attributes?.address,
    work_center_createdAt:
      dataItem.attributes?.work_center.data.attributes?.createdAt,
    work_center_updatedAt:
      dataItem.attributes?.work_center.data.attributes?.updatedAt,
    work_center_publishedAt:
      dataItem.attributes?.work_center.data.attributes?.publishedAt,
    appointment_status_id: dataItem.attributes?.appointment_status.data.id,
    appointment_status_name:
      dataItem.attributes?.appointment_status.data.attributes?.name,
    appointment_status_description:
      dataItem.attributes?.appointment_status.data.attributes?.description,
    appointment_status_active:
      dataItem.attributes?.appointment_status.data.attributes?.active,
    appointment_status_createdAt:
      dataItem.attributes?.appointment_status.data.attributes?.createdAt,
    appointment_status_updatedAt:
      dataItem.attributes?.appointment_status.data.attributes?.updatedAt,
    appointment_status_publishedAt:
      dataItem.attributes?.appointment_status.data.attributes?.publishedAt,
    location_appointment_id: dataItem.attributes?.location_appointment.data.id,
    location_appointment_location:
      dataItem.attributes?.location_appointment.data.attributes?.location,
    location_appointment_active:
      dataItem.attributes?.location_appointment.data.attributes?.active,
    location_appointment_createdAt:
      dataItem.attributes?.location_appointment.data.attributes?.createdAt,
    location_appointment_updatedAt:
      dataItem.attributes?.location_appointment.data.attributes?.updatedAt,
    location_appointment_publishedAt:
      dataItem.attributes?.location_appointment.data.attributes?.publishedAt,
  }));
  return mappedData;
};
