/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-floating-promises */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Checkbox,
  FormControl,
  InputAdornment,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  Button,
  Chip,
  Box,
  Tooltip,
} from "@mui/material";
import { top100Films } from "../../../constants/constants";
import { useEffect, useMemo, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  GridActionsCellItem,
  GridCellParams,
  GridColDef,
  GridRenderEditCellParams,
} from "@mui/x-data-grid";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { GridDeleteIcon } from "@mui/x-data-grid";
import SaveIcon from "@mui/icons-material/Save";
import { AppointmentRequestPOST } from "../../../interfaces/Appointment/appointment";
import { useAppointmentStore } from "../../../zustand/useAppointmentStore";
import { usePodoTable } from "../../../hooks/usePodoTable";
import { useTableCrudBasic } from "../../../hooks/useTableCrudBasic";
import { toast } from "sonner";
import { PodoTable } from "../../TablePodo/Table";
import { useFormik } from "formik";
import patientService from "../../../services/Patients/patients";
import { TaxImpRequestGET } from "../../../interfaces/interfaces";
import controlsService from "../../../services/Control/controls";
import clinicService from "../../../services/Clinics/clinics";
import { DateTimePicker } from "@mui/x-date-pickers";
import serviceWorkCenter from "../../../services/Services/services";
import locationAppointment from "../../../services/Appointment/locationsAppointment";
import dayjs from "dayjs";
import appointmentLines from "../../../services/Appointment/appointmentLine";
import icons from "../../../Utils/icons";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const AppointmentForm = () => {
  const [loading, setLoading] = useState(false);
  const [workCenters, setworkCenters] = useState([]);
  const [loadingTaxes, setLoadingTaxes] = useState(true);
  const [listPorcetagesTaxes, setListPorcetagesTaxes] = useState<any[]>([]);
  const [personName, setPersonName] = useState<string[]>([]);

  const { appointment, saveAppointment, updateAppointment } =
    useAppointmentStore();

  const { handleService } = useTableCrudBasic();
  const [listServices, setListServices] = useState([]);
  const formikCreateAppointment = useFormik<any>({
    initialValues: useMemo(() => {
      return {
        data: {
          id: undefined, // Puedes usar undefined o algún valor por defecto
          appointment_type: appointment?.appointment_type_id ?? null,
          patient: appointment?.patient_id ?? null,
          employee: appointment?.employee_id ?? null,
          work_center: appointment?.work_center_id ?? null,
          location_appointment_id: appointment?.location_appointment_id ?? null,
          finish: appointment?.finish ?? false,
          paid: appointment?.paid ?? false,
          reminder_send: appointment?.reminder_send ?? false,
          external_num_invoice: appointment?.external_num_invoice ?? null,
          internal_num_invoice: appointment?.internal_num_invoice ?? null,
          health_insurance: appointment?.health_insurance ?? false,
          internal_code: "",
          appointment_status: appointment?.appointment_status_id ?? null,
          sumary: appointment?.sumary ?? "",
          location_appointment: appointment?.location_appointment_id ?? null,
          datetime_appointment: appointment?.datetime_appointment ?? new Date(),
          colour: appointment?.colour ?? null,
          paid_all_insurance: appointment?.paid_all_insurance ?? null,
          date_paid: appointment?.date_paid ?? new Date(),
          benefit: appointment?.benefit ?? 0,
          services: [],
        },
      };
    }, [appointment]),
    onSubmit: (values: AppointmentRequestPOST, { setSubmitting }) => {
      setSubmitting(true);

      setSubmitting(false);
    },
  });
  const [porcentageBenefitsEmployee, setPorcentageBenefitsEmployee] = useState(
    []
  );

  const [porcentageDiscountService, setPorcentageDiscountService] = useState(
    []
  );
  const formikPatientAppointment = useFormik<any>({
    initialValues: useMemo(() => {
      return {
        data: {
          id: undefined, // Puedes usar undefined o algún valor por defecto
          name: "",
          last_name: "",
          active: "",
          country: "",
          city: "",
          code_postal: "",
          tax_name: "",
          location: "",
          phone: "",
          isMale: true,
          email: "",
          history_clinic: null,
          notes: "",
          img_profile: null,
          health_insurance: false,
        },
      };
    }, []),
    onSubmit: (_: any, { setSubmitting }) => {
      setSubmitting(true);
      setSubmitting(false);
    },
  });
  const [rowsForServicesByClinic, setRowsForServicesByClinic] = useState([]);
  const [listLocationsAppointment, setListLocationsAppointment] = useState([]);
  const [listServicesAppointment, setListServicesAppointment] = useState([]);
  console.log({ appointment });

  console.log(formikCreateAppointment.values);
  const handleChangeServices = (
    event: SelectChangeEvent<typeof personName>
  ) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  useEffect(() => {
    if (appointment?.id) {
      patientService
        .getPatientById(appointment?.patient_id)
        .then((response) => {
          formikPatientAppointment.setFieldValue("id", response?.data?.id);
          formikPatientAppointment.setFieldValue(
            "name",
            response?.data?.attributes?.name
          );
          formikPatientAppointment.setFieldValue(
            "last_name",
            response?.data?.attributes?.last_name
          );
          formikPatientAppointment.setFieldValue(
            "active",
            response?.data?.attributes?.active
          );
          formikPatientAppointment.setFieldValue(
            "country",
            response?.data?.attributes?.country
          );
          formikPatientAppointment.setFieldValue(
            "city",
            response?.data?.attributes?.city
          );
          formikPatientAppointment.setFieldValue(
            "code_postal",
            response?.data?.attributes?.code_postal
          );
          formikPatientAppointment.setFieldValue(
            "tax_name",
            response?.data?.attributes?.tax_name
          );
          formikPatientAppointment.setFieldValue(
            "location",
            response?.data?.attributes?.location
          );
          formikPatientAppointment.setFieldValue(
            "phone",
            response?.data?.attributes?.phone
          );
          formikPatientAppointment.setFieldValue(
            "isMale",
            response?.data?.attributes?.isMale
          );
          formikPatientAppointment.setFieldValue(
            "email",
            response?.data?.attributes?.email
          );
          formikPatientAppointment.setFieldValue(
            "notes",
            response?.data?.attributes?.notes
          );
          formikPatientAppointment.setFieldValue(
            "history_clinic",
            response?.data?.attributes?.history_clinic ?? null
          );
          formikPatientAppointment.setFieldValue(
            "img_profile",
            response?.data?.attributes?.img_profile ?? null
          );
          formikPatientAppointment.setFieldValue(
            "health_insurance",
            response?.data?.attributes?.health_insurance ?? null
          );
        });

      clinicService.getAllClinics().then((response: any) => {
        const workCentersMapped = response.data.map((item: any) => ({
          id: item.id,
          label: item.attributes.name,
        }));
        setworkCenters(workCentersMapped);
      });

      controlsService
        .getAllTaxes()
        .then((response: TaxImpRequestGET) => {
          setListPorcetagesTaxes(
            response.data.map(({ id, attributes }) => ({
              id,
              label: `${attributes.name} - ${attributes.porcentage}%`,
            }))
          );
        })
        .finally(() => {
          setLoadingTaxes(false);
        });

      serviceWorkCenter
        .getAllServicesByClinic(formikCreateAppointment.values.data.work_center)
        .then((response: any) => {
          setListServices(
            response.data.map(({ id, attributes }: any) => ({
              id,
              label: `${attributes.service.data.attributes.name}`,
            }))
          );
        });

      locationAppointment.getAlllocationAppointment().then((response: any) => {
        setListLocationsAppointment(
          response?.data.map(({ id, attributes }: any) => ({
            id,
            label: `${attributes.location}`,
          }))
        );
      });
      console.log({ appointment });
      if (appointment.id) {
        appointmentLines
          .getAppointmentLinesByAppointment(appointment.id)
          .then((response: any) => {
            setListServicesAppointment(response.data);
            formikCreateAppointment.setFieldValue(
              "data.services",
              response.data.map(({ id }: any) => id)
            );
          });
      }

      Promise.all([
        controlsService.getAllPorcentageDiscount(),
        controlsService.getAllPorcentageBenefit(),
      ])
        .then(([porcentageDiscountResult, porcentageBenefitResult]: any) => {
          // Aquí puedes trabajar con los resultados de ambas promesas
          setPorcentageBenefitsEmployee(
            porcentageBenefitResult?.data.map(({ id, attributes }: any) => ({
              id,
              porcentage_value: attributes.porcentage_value,
              value: attributes.value,
            }))
          );

          setPorcentageDiscountService(
            porcentageDiscountResult?.data.map(({ id, attributes }: any) => ({
              id,
              porcentage_value: attributes.porcentage_value,
              value: attributes.value,
            }))
          );
        })
        .catch((error) => {
          console.error("Error al obtener datos:", error);
        });
    }
  }, [appointment]);

  return (
    <>
      {/* <hr></hr>
      <hr></hr>

      {JSON.stringify(formikCreateAppointment.values)}
      <hr></hr>
      <hr></hr>
      {JSON.stringify(formikPatientAppointment.values)}
      <hr></hr>
      <hr></hr> */}

      <div className="w-full flex mt-5">
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">
            Nombre Paciente
          </InputLabel>
          <OutlinedInput
            name="data.name"
            value={formikPatientAppointment.values.name}
            onChange={formikPatientAppointment.handleChange}
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            label="Nombre Paciente"
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">
            Apellidos Pacientes
          </InputLabel>
          <OutlinedInput
            name="data.last_name"
            value={formikPatientAppointment.values.last_name}
            onChange={formikPatientAppointment.handleChange}
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            label="Apellido Pacientes"
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">
            NIF/NIE/CIF Paciente
          </InputLabel>
          <OutlinedInput
            name="data.tax_name"
            value={formikPatientAppointment.values.tax_name}
            onChange={formikPatientAppointment.handleChange}
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            label="NIF/NIE/CIF Paciente"
          />
        </FormControl>
      </div>

      <div className="w-full my-2 flex">
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="location">Dirección</InputLabel>
          <OutlinedInput
            id="location"
            name="data.location"
            value={formikPatientAppointment.values.location}
            onChange={formikPatientAppointment.handleChange}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            label="location"
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="location">Email Paciente</InputLabel>
          <OutlinedInput
            id="email"
            name="data.email"
            value={formikPatientAppointment.values.email}
            onChange={formikPatientAppointment.handleChange}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            label="Email Paciente"
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="location">Observaciones De paciente</InputLabel>
          <OutlinedInput
            id="notes"
            name="data.notes"
            value={formikPatientAppointment.values.location}
            onChange={formikPatientAppointment.handleChange}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            label="Observaciones De paciente"
          />
        </FormControl>
      </div>
      <FormControl className="flex" fullWidth sx={{ m: 1 }}>
        <div className="flex items-center">
          <Typography>Seguro médico</Typography>
          <Checkbox
            name="data.health_insurance"
            onChange={formikPatientAppointment.handleChange}
            checked={formikPatientAppointment.values?.health_insurance ?? false}
          />
          <Checkbox
            name="data.paid_all_insurance"
            checked={formikCreateAppointment.values.paid_all_insurance ?? false}
            onChange={formikCreateAppointment.handleChange}
          />{" "}
          <Typography>
            ¿El costo ha sido cubierto en su totalidad por el seguro?
          </Typography>
        </div>
      </FormControl>

      <div className="w-full flex mt-2">
        {workCenters.length > 0 && (
          <FormControl fullWidth sx={{ m: 1 }}>
            <Autocomplete
              style={{ width: "100%" }}
              disablePortal
              value={
                formikCreateAppointment.values.data.work_center
                  ? workCenters.find(
                      (workCenter: { id: number | string; label: string }) =>
                        workCenter.id ===
                        formikCreateAppointment.values.data.work_center
                    )
                  : null
              }
              id="combo-box-demo"
              options={workCenters}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Clinica" />
              )}
            />
          </FormControl>
        )}

        {listLocationsAppointment.length > 0 && (
          <FormControl fullWidth sx={{ m: 1 }}>
            <Autocomplete
              style={{ width: "100%" }}
              disablePortal
              value={
                formikCreateAppointment.values.data.location_appointment_id
                  ? listLocationsAppointment.find(
                      (location: { id: number | string; label: string }) =>
                        location.id ===
                        formikCreateAppointment.values.data
                          .location_appointment_id
                    )
                  : listLocationsAppointment.length === 1
                  ? listLocationsAppointment[0]
                  : null
              }
              id="combo-box-demo"
              options={listLocationsAppointment}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Ubicación cita" />
              )}
            />
          </FormControl>
        )}

        <FormControl fullWidth sx={{ m: 1 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              value={dayjs(
                formikCreateAppointment.values.data.datetime_appointment
              )}
              onChange={formikCreateAppointment.handleChange}
              label={"Fecha de la cita"}
              name={"datetime_appointment"}
            />
          </LocalizationProvider>
        </FormControl>
      </div>

      <FormControl fullWidth sx={{ m: 1 }}>
        <Typography>
          Añade los servicios realizados sin seguro médico
        </Typography>
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel id="demo-multiple-checkbox-label">Servicios</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={
            formikCreateAppointment.values.data.services
              ? listServices.filter(
                  (service: { id: number | string; label: string }) =>
                    formikCreateAppointment.values.data.services.includes(
                      service.id
                    )
                )
              : []
          }
          onChange={handleChangeServices}
          input={<OutlinedInput label="Servicio" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((service: any) => (
                <Chip key={service.id} label={service.label} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {listServices.map(
            (service: { id: number | string; label: string }) => (
              <MenuItem key={service.id} value={service.id}>
                <Checkbox
                  checked={
                    formikCreateAppointment.values.data.services &&
                    formikCreateAppointment.values.data.services.includes(
                      service.id
                    )
                  }
                />
                <ListItemText primary={service.label} />
              </MenuItem>
            )
          )}
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ m: 1 }}>
        <Autocomplete
          style={{ width: "100%" }}
          disablePortal
          freeSolo
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Num. Factura interno" />
          )}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">
          Num. Factura externo
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start"></InputAdornment>}
          label="Num. Factura externo"
        />
      </FormControl>
      <TextField
        fullWidth
        sx={{ m: 1 }}
        label="Importe"
        id="outlined-start-adornment"
        InputProps={{
          startAdornment: <InputAdornment position="start">€</InputAdornment>,
        }}
      />

      <FormControl fullWidth sx={{ m: 1 }}>
        <Autocomplete
          style={{ width: "100%" }}
          disablePortal
          id="combo-box-demo"
          options={listPorcetagesTaxes}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Impuesto" />}
        />
      </FormControl>
      <TextField
        fullWidth
        sx={{ m: 1 }}
        label="Beneficio"
        id="outlined-start-adornment"
        InputProps={{
          startAdornment: <InputAdornment position="start">€</InputAdornment>,
        }}
      />

      <div className="flex w-full justify-between mx-2">
        <Button
          variant="contained"
          color="error"
          startIcon={<GridDeleteIcon />}
        >
          Eliminar
        </Button>
        <Button variant="contained" endIcon={<SaveIcon />}>
          Guardar
        </Button>
      </div>
    </>
  );
};

export default AppointmentForm;
