import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Button,
  Card,
  Checkbox,
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
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import MyDatePicker from "../../../components/DatePicker/DatePicker";
import { GridExpandMoreIcon, GridSearchIcon } from "@mui/x-data-grid";
import { TOAST, top100Films } from "../../../constants/constants";
import AppointmentForm from "../../../components/Forms/AppointmentForm/AppointmentForm";
import Exports from "../../../components/Buttons/Exports";
import { Create } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Appointment } from "../../../interfaces/interfaces";
import appointmentService from "../../../services/Appointment/appointment";
import { toast } from "sonner";
import { errorToastManagment } from "../../../constants/handleApiErrors";
import { useFormik } from "formik";
import { ToggleSwitch } from "../../../components/Switch/Toggle";
import { FaRegFileExcel } from "react-icons/fa";
export default function Appointments() {
  const [listAppointments, setListAppointments] = useState<Appointment[]>([]);
  useEffect(() => {
    appointmentService.getAllAppointments().then((response: Appointment[]) => {
      setListAppointments(response);
    });
  }, []);

  const handleSave = (bodyNewAppointment: Appointment) => {
    const { id, ...restOfBody } = bodyNewAppointment;
    const isUpdating = !!id;

    const promise = isUpdating
      ? appointmentService.updateAppointment(id!, restOfBody)
      : appointmentService.addAppointment(bodyNewAppointment);

    toast.promise(promise, {
      loading: TOAST.LOADING,
      success: (response: any) => {
        //TODO: Cambiar tipado
        if (response && response.length > 0) {
          return TOAST.SUCCESS;
        }
      },
      error: errorToastManagment,
    });
  };

  const formikCreate = useFormik<Appointment>({
    initialValues: {
      // id: null,
      // name: null,
      // location: null,
      // phone: null,
      // updated_at: null,
      // created_at: null,
      // active: null,
    },
    // validationSchema: clinicValidationSchemaCreate,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      handleSave(values);
      setSubmitting(false);
    },
  });

  return (
    <>
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
                  <FormControl className="flex" fullWidth sx={{ m: 1 }}>
                    <ToggleSwitch text={"¿Tiene Seguro?"} />
                  </FormControl>
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
          <Accordion className="w-full md:w-3/4">
            <AccordionSummary
              className="w-full"
              expandIcon={<GridExpandMoreIcon />}
              aria-controls="panel1a-conteaant"
              id="panel1a-headeaaar"
            >
              <Typography>Identificador Cita ADC234</Typography>
            </AccordionSummary>
            <AccordionDetails className="w-full">
              <AppointmentForm />
              <div className="flex w-full justify-between mx-2">
                <Button
                  variant="contained"
                  color="error"
                  startIcon={<DeleteIcon />}
                >
                  Eliminar
                </Button>
                <Button variant="contained" endIcon={<SaveIcon />}>
                  Guardar
                </Button>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <Pagination
          className="w-full my-8 flex bottom-0 relative justify-center"
          count={10}
          //   siblingCount={0}
          variant="outlined"
          shape="rounded"
        />
      </Box>
    </>
  );
}
