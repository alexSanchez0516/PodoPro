import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import {
  Autocomplete,
  Button,
  Card,
  FormControlLabel,
  FormLabel,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Pagination,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@mui/material";
import MyDatePicker from "../../../components/DatePicker/DatePicker";
import { GridColDef, GridSearchIcon } from "@mui/x-data-grid";
import { MODAL_TYPE, TOAST, top100Films } from "../../../constants/constants";
import AppointmentForm from "../../../components/Forms/AppointmentForm/AppointmentForm";
import Exports from "../../../components/Buttons/Exports";
import { Create, Delete, Edit } from "@mui/icons-material";
import { useEffect, useState } from "react";
import appointmentService from "../../../services/Appointment/appointment";
import { toast } from "sonner";
import { errorToastManagment } from "../../../constants/handleApiErrors";
import { ToggleSwitch } from "../../../components/Switch/Toggle";
import { FaRegFileExcel } from "react-icons/fa";
import { useTableCrudBasic } from "../../../hooks/useTableCrudBasic";
import { usePodoTable } from "../../../hooks/usePodoTable";
import { PodoTable } from "../../../components/TablePodo/Table";
import { FaEye } from "react-icons/fa6";
import {
  AppointmentResponseGETFullPopulate,
  MappedApiResponseForComponentList,
} from "../../../interfaces/appointment";
import { ModalManagement } from "../../../components/Modal/ModalManagement";
import { useModalsStore } from "../../../zustand/useModalsStore";
import { useAppointmentStore } from "../../../zustand/useAppointmentStore";
export default function Appointments() {
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
  const [loading, setLoading] = useState(true);
  const { appointment, saveAppointment, updateAppointment } =
    useAppointmentStore();

  const toggleModal = useModalsStore((state) => state.toggleModal);
  const { handleService } = useTableCrudBasic();
  const [listAppointments, setListAppointments] = useState<
    MappedApiResponseForComponentList[]
  >([]);
  useEffect(() => {
    appointmentService
      .getAllAppointments()
      .then((response: AppointmentResponseGETFullPopulate) => {
        const mappedData: any = response.data.map((dataItem) => ({
          employee_id: dataItem.attributes.users_permissions_user.data.id,
          employee_email:
            dataItem.attributes.users_permissions_user.data.attributes.email,
          employee_username:
            dataItem.attributes.users_permissions_user.data.attributes.username,
          id: dataItem.id,
          finish: dataItem.attributes.finish,
          paid: dataItem.attributes.paid,
          reminder_send: dataItem.attributes.reminder_send,
          external_num_invoice: dataItem.attributes.external_num_invoice,
          internal_num_invoice: dataItem.attributes.internal_num_invoice,
          health_insurance: dataItem.attributes.health_insurance,
          internal_code: dataItem.attributes.internal_code,
          sumary: dataItem.attributes.sumary,
          datetime_appointment: dataItem.attributes.datetime_appointment,
          colour: dataItem.attributes.colour,
          paid_all_insurance: dataItem.attributes.paid_all_insurance,
          date_paid: dataItem.attributes.date_paid,
          createdAt: dataItem.attributes.createdAt,
          updatedAt: dataItem.attributes.updatedAt,
          publishedAt: dataItem.attributes.publishedAt,
          appointment_type_name:
            dataItem.attributes.appointment_type.data.attributes.name,
          appointment_type_id: dataItem.attributes.appointment_type.data.id,
          patient_id: dataItem.attributes.patient.data.id,
          patient_name: dataItem.attributes.patient.data.attributes.name,
          patient_last_name:
            dataItem.attributes.patient.data.attributes.last_name,
          patient_active: dataItem.attributes.patient.data.attributes.active,
          patient_country: dataItem.attributes.patient.data.attributes.country,
          patient_city: dataItem.attributes.patient.data.attributes.city,
          patient_code_postal:
            dataItem.attributes.patient.data.attributes.code_postal,
          patient_tax_name:
            dataItem.attributes.patient.data.attributes.tax_name,
          patient_location:
            dataItem.attributes.patient.data.attributes.location,
          patient_phone: dataItem.attributes.patient.data.attributes.phone,
          patient_isMale: dataItem.attributes.patient.data.attributes.isMale,
          patient_email: dataItem.attributes.patient.data.attributes.email,
          patient_notes: dataItem.attributes.patient.data.attributes.notes,
          patient_createdAt:
            dataItem.attributes.patient.data.attributes.createdAt,
          patient_updatedAt:
            dataItem.attributes.patient.data.attributes.updatedAt,
          patient_publishedAt:
            dataItem.attributes.patient.data.attributes.publishedAt,
          work_center_id: dataItem.attributes.work_center.data.id,
          work_center_name:
            dataItem.attributes.work_center.data.attributes.name,
          work_center_active:
            dataItem.attributes.work_center.data.attributes.active,
          work_center_country:
            dataItem.attributes.work_center.data.attributes.country,
          work_center_email:
            dataItem.attributes.work_center.data.attributes.email,
          work_center_city:
            dataItem.attributes.work_center.data.attributes.city,
          work_center_tax_name:
            dataItem.attributes.work_center.data.attributes.tax_name,
          work_center_code_postal:
            dataItem.attributes.work_center.data.attributes.code_postal,
          work_center_phone:
            dataItem.attributes.work_center.data.attributes.phone,
          work_center_address:
            dataItem.attributes.work_center.data.attributes.address,
          work_center_createdAt:
            dataItem.attributes.work_center.data.attributes.createdAt,
          work_center_updatedAt:
            dataItem.attributes.work_center.data.attributes.updatedAt,
          work_center_publishedAt:
            dataItem.attributes.work_center.data.attributes.publishedAt,
          appointment_status_id: dataItem.attributes.appointment_status.data.id,
          appointment_status_name:
            dataItem.attributes.appointment_status.data.attributes.name,
          appointment_status_description:
            dataItem.attributes.appointment_status.data.attributes.description,
          appointment_status_active:
            dataItem.attributes.appointment_status.data.attributes.active,
          appointment_status_createdAt:
            dataItem.attributes.appointment_status.data.attributes.createdAt,
          appointment_status_updatedAt:
            dataItem.attributes.appointment_status.data.attributes.updatedAt,
          appointment_status_publishedAt:
            dataItem.attributes.appointment_status.data.attributes.publishedAt,
          location_appointment_id:
            dataItem.attributes.location_appointment.data.id,
          location_appointment_location:
            dataItem.attributes.location_appointment.data.attributes.location,
          location_appointment_active:
            dataItem.attributes.location_appointment.data.attributes.active,
          location_appointment_createdAt:
            dataItem.attributes.location_appointment.data.attributes.createdAt,
          location_appointment_updatedAt:
            dataItem.attributes.location_appointment.data.attributes.updatedAt,
          location_appointment_publishedAt:
            dataItem.attributes.location_appointment.data.attributes
              .publishedAt,
          services: dataItem.attributes.services.data.map((service: any) => ({
            id: service.id,
            name: service.attributes.name,
            description: service.attributes.description,
            price_unit: service.attributes.price_unit,
            active: service.attributes.active,
            createdAt: service.attributes.createdAt,
            updatedAt: service.attributes.updatedAt,
            publishedAt: service.attributes.publishedAt,
          })),
        }));
        setListAppointments(mappedData);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleError = (row: any) => {
    if (!row.number) {
      toast.error("Compruebe los campos");
      throw Error();
    }
  };
  const handleChangeRows = (newRow: any, oldRow: any) => {
    setRows(
      rows.map((row: any) => (row.id === oldRow.id ? newRow : row))
      // .sort((a: Percentage, b: Percentage) => a.number - b.number) //Ordenar de forma ascendente al insertar nuevo dato
    );
  };

  const columns: GridColDef[] = [
    {
      field: "patient_name",
      headerName: "Nombre Paciente",
      type: "string",
      editable: true,
      flex: 1,
    },
    {
      field: "patient_last_name",
      headerName: "Apellidos Paciente",
      type: "string",
      editable: true,
      flex: 1,
    },

    {
      field: "work_center_name",
      headerName: "Clínica",
      type: "string",
      editable: true,
      flex: 1,
    },

    {
      field: "internal_num_invoice",
      headerName: "Código interno",
      type: "string",
      editable: true,
      flex: 2,
    },
    {
      field: "external_num_invoice",
      headerName: "Código externo",
      type: "string",
      editable: true,
      flex: 2,
    },
    {
      field: "employee_username",
      headerName: "Profesional",
      type: "string",
      editable: true,
      flex: 1,
    },

    {
      field: "appointment_type_name",
      headerName: "Tipo de cita",
      type: "string",
      editable: true,
      flex: 1,
    },
    {
      field: "datetime_appointment",
      headerName: "Fecha",
      type: "string",
      editable: true,
      flex: 1,
    },

    {
      field: "paid",
      headerName: "Pagado",
      type: "boolean",
      editable: true,
      flex: 1,
    },

    {
      field: "actions",
      width: 200,
      headerAlign: "center",
      headerName: "Acciones",
      renderCell: (params) => {
        return (
          <div className="w-full">
            <Button
              onClick={() => {
                console.log("hizo click", params.row);
                saveAppointment(params.row);
                toggleModal(MODAL_TYPE.APPOINTMENT_EDIT);
              }}
              color="primary"
              className=""
            >
              <FaEye />
            </Button>
            <Button color="primary" className="">
              <Edit />
            </Button>
            <Button color="error" className="">
              <Delete />
            </Button>
          </div>
        );
      },
    },
  ];

  // const handleSave = (bodyNewAppointment: Appointment) => {
  //   const { id, ...restOfBody } = bodyNewAppointment;
  //   const isUpdating = !!id;

  //   const promise = isUpdating
  //     ? appointmentService.updateAppointment(id!, restOfBody)
  //     : appointmentService.addAppointment(bodyNewAppointment);

  //   toast.promise(promise, {
  //     loading: TOAST.LOADING,
  //     success: (response: any) => {
  //       //TODO: Cambiar tipado
  //       if (response && response.length > 0) {
  //         return TOAST.SUCCESS;
  //       }
  //     },
  //     error: errorToastManagment,
  //   });
  // };

  // const formikCreate = useFormik<Appointment>({
  //   initialValues: {
  //     // id: null,
  //     // name: null,
  //     // location: null,
  //     // phone: null,
  //     // updated_at: null,
  //     // created_at: null,
  //     // active: null,
  //   },
  //   // validationSchema: clinicValidationSchemaCreate,
  //   onSubmit: (values, { setSubmitting }) => {
  //     setSubmitting(true);
  //     handleSave(values);
  //     setSubmitting(false);
  //   },
  // });

  return (
    <>
      <ModalManagement />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Card className=" w-full md:w-3/4">
          <div className="flex flex-col p-5 justify-center items-center flex-wrap w-full mt-5">
            <Typography variant="h3" className="ml-5 pb-8">
              Citas
            </Typography>
            <div className="flex flex-col md:flex-row  flex-wrap">
              <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-1/2">
                <FormControl fullWidth sx={{ m: 1 }}>
                  <Autocomplete
                    style={{ width: "100%" }}
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Búsqueda por nombre y apellidos"
                      />
                    )}
                  />
                </FormControl>
              </div>

              <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-1/2">
                <FormControl fullWidth sx={{ m: 1 }}>
                  <Autocomplete
                    style={{ width: "100%" }}
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Número de factura interno"
                      />
                    )}
                  />
                </FormControl>
              </div>

              <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-1/2">
                <FormControl fullWidth sx={{ m: 1 }}>
                  <Autocomplete
                    style={{ width: "100%" }}
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Número de factura externo"
                      />
                    )}
                  />
                </FormControl>
              </div>

              <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-1/2">
                <FormControl className="flex py-2" fullWidth sx={{ m: 1 }}>
                  <MyDatePicker text="Fecha desde" />
                </FormControl>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-1/2">
                <FormControl className="flex py-2" fullWidth sx={{ m: 1 }}>
                  <MyDatePicker text="Fecha hasta" />
                </FormControl>
              </div>

              <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-1/2">
                <FormControl className="flex py-2" fullWidth sx={{ m: 1 }}>
                  <InputLabel id="demo-multiple-checkbox-label">
                    Servicio
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    // value={personName}
                    // onChange={handleChange}
                    input={<OutlinedInput label="Servicio" />}
                    // renderValue={(selected) => selected.join(", ")}
                    // MenuProps={MenuProps}
                  >
                    {/* {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))} */}
                  </Select>
                </FormControl>
              </div>

              <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-1/2">
                <div className="w-full flex items-center ">
                  <FormControl fullWidth sx={{ m: 1 }}>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      Clínica
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Clínica A"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Clínica B"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-1/2">
                <div className="w-full flex items-center ">
                  {/* <FormControl className="flex" fullWidth sx={{ m: 1 }}>
                    <ToggleSwitch text={"¿Tiene Seguro?"} />
                  </FormControl> */}
                </div>
              </div>
            </div>

            <div className="flex justify-center w-full my-5">
              <Button variant="contained" endIcon={<GridSearchIcon />}>
                Buscar
              </Button>
              <div className="mx-5 gap-2 flex ">
                <Exports />

                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<FaRegFileExcel />}
                >
                  Importar Registro/s
                </Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    toggleModal(MODAL_TYPE.APPOINTMENT_CREATE);
                  }}
                  color="secondary"
                  endIcon={<Create />}
                >
                  Crear Registro
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <div className="md:my-8 w-full flex flex-col items-center">
          <PodoTable
            rows={listAppointments as unknown}
            setRowModesModel={setRowModesModel}
            setRows={setRows}
            rowModesModel={rowModesModel}
            columns={columns}
            columnVisibilityModel={{ id: false, id_year: false }}
            // globalActions={
            //   editable
            //     ? [
            //         {
            //           Icon: icons.InfoIcon,
            //           tooltip: "Información",
            //           action: () => setOpenInfoModal(true),
            //         },
            //         {
            //           Icon: icons.AddCircleIcon,
            //           tooltip: "Añadir",
            //           action: () => handleAddRow(),
            //         },
            //       ]
            //     : [
            //         {
            //           Icon: icons.InfoIcon,
            //           tooltip: "Información",
            //           action: () => setOpenInfoModal(true),
            //         },
            //       ]
            // }
            // updateService={(row: Percentage) => {
            //   handleError(row);
            //   handleService({
            //     row,
            //     service: updatePercentage,
            //     action: handleChangeRows,
            //   });
            // }}
            // postService={(row: Percentage) => {
            //   handleError(row);
            //   handleService({
            //     row,
            //     service: createPercentage,
            //     action: handleChangeRows,
            //   });
            // }}
            loading={loading}
          ></PodoTable>
        </div>
      </Box>
    </>
  );
}
