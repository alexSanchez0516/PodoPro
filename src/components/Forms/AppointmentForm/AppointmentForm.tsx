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
} from "@mui/material";
import { top100Films } from "../../../constants/constants";
import { useEffect, useMemo, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { GridColDef, GridRenderEditCellParams } from "@mui/x-data-grid";
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
import { GetWorkCenterByID } from "../../../interfaces/WorkCenter/interfacesWorkCenter";

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

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const AppointmentForm = () => {
  const [loading, setLoading] = useState(false);
  const [workCenters, setworkCenters] = useState([]);
  const [loadingTaxes, setLoadingTaxes] = useState(true);
  const [services, setServices] = useState([]);
  const [listPorcetagesTaxes, setListPorcetagesTaxes] = useState<any[]>([]);
  const [personName, setPersonName] = useState<string[]>([]);
  const {
    rows,
    handleAddRow,
    handleCancelClick,
    handleDeleteClick,
    handleEditClick,
    handleSaveClick,
    rowModesModel,
    setRowModesModel,
    setRows,
  } = usePodoTable();
  const { appointment, saveAppointment, updateAppointment } =
    useAppointmentStore();
  const { handleService } = useTableCrudBasic();

  const formikCreateAppointment = useFormik<any>({
    initialValues: useMemo(() => {
      return {
        data: {
          id: undefined, // Puedes usar undefined o algún valor por defecto
          appointment_type: appointment?.appointment_type_id ?? null,
          patient: appointment?.patient_id ?? null,
          employee: appointment?.employee_id ?? null,
          work_center: appointment?.work_center_id ?? null,
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
        },
      };
    }, [appointment]),
    onSubmit: (values: AppointmentRequestPOST, { setSubmitting }) => {
      setSubmitting(true);

      setSubmitting(false);
    },
  });

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

  console.log({ appointment });

  console.log(formikCreateAppointment.values);
  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleError = (row: any) => {
    if (!row.number) {
      toast.error("Compruebe los campos");
      throw Error();
    }
  };
  const handleChangeRows = (newRow: any, oldRow: any) => {
    setRows(rows.map((row: any) => (row.id === oldRow.id ? newRow : row)));
  };

  const columns: GridColDef[] = [
    {
      field: "exist_associated_task",
      headerName: "Servicio",
      type: "string",
      editable: false,
      flex: 1,
    },
    {
      field: "normativa_OK_1",
      headerName: "Porcentage benef.",
      type: "number",
      editable: false,
      renderCell: (params: GridRenderEditCellParams) => {
        return (
          <div title={params.row.branch_git} className="w-100">
            {params.row.branch_git ?? "-"}
          </div>
        );
      },
      flex: 1,
    },
    {
      field: "normativa_OK",
      headerName: "cantidad",
      type: "string",
      editable: false,
      flex: 0,
    },

    {
      field: "state_task_jira",
      headerName: "Importe facturado",
      type: "number",
      editable: false,
      flex: 1,
    },

    {
      field: "branch_git",
      headerName: "Importe beneficio",
      type: "number",
      renderCell: (params: GridRenderEditCellParams) => {
        return (
          <div title={params.row.branch_git} className="w-100">
            {params.row.branch_git ?? "-"}
          </div>
        );
      },
      editable: false,
      flex: 1,
    },
    {
      field: "comment",
      headerName: "Observaciones",
      type: "string",
      renderCell: (params: GridRenderEditCellParams) => {
        return (
          <div className="w-100" title={params.row.comment ?? "-"}>
            {params.row.comment ?? "-"}
          </div>
        );
      },
      editable: false,
      flex: 2,
    },
  ];

  // if (!appointment) {
  //   return "Cargando...";
  // }

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
        console.log({ workCentersMapped });
        setworkCenters(workCentersMapped);
        console.log({ response });
      });
    }
  }, [appointment]);

  useEffect(() => {
    console.log(
      "values formikCreateAppointment --> ",
      formikCreateAppointment.values
    );
  }, [formikCreateAppointment.values]);

  useEffect(() => {
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
  }, []);

  return (
    <>
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
        {/* <ToggleSwitch
          handleChange={formikPatientAppointment.handleChange}
          name="data.health_insurance"
          value={formikPatientAppointment.values?.health_insurance ?? false}
          text={"¿Tiene Seguro?"}
        />
        <ToggleSwitch
          handleChange={formikCreateAppointment.handleChange}
          name="data.paid_all_insurance"
          value={formikCreateAppointment.values?.paid_all_insurance ?? false}
          text={"¿El costo ha sido cubierto en su totalidad por el seguro?"}
        /> */}
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
        <FormControl fullWidth sx={{ m: 1 }}>
          <Autocomplete
            freeSolo
            style={{ width: "100%" }}
            disablePortal
            id="combo-box-demo"
            options={workCenters}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Clinica" />}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={formikCreateAppointment.values.datetime_appointment}
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
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Servicio" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Detalle de Cita
          </AccordionSummary>
          <AccordionDetails>
            <PodoTable
              rows={[] as unknown}
              setRowModesModel={setRowModesModel}
              setRows={setRows}
              rowModesModel={rowModesModel}
              columns={columns}
              columnVisibilityModel={{ id: false, id_year: false }}
              loading={loading}
            ></PodoTable>
          </AccordionDetails>
        </Accordion>
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
