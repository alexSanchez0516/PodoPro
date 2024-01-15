import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Button,
  Card,
  FormControlLabel,
  FormLabel,
  Pagination,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import MyDatePicker from "../../components/DatePicker/DatePicker";
import { GridExpandMoreIcon } from "@mui/x-data-grid";
import BasicSpeedDial from "../../components/SpeedDial";
import SearchIcon from "@mui/icons-material/Search";
import { top100Films } from "../../constants/constants";
import AppointmentForm from "../../components/Forms/AppointmentForm/AppointmentForm";
export default function Appointments() {
  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
        <Card className="w-full">
          <div className="flex p-5 flex-wrap w-full mt-5">
            <Typography variant="h3" className="ml-5 pb-8">
              Citas
            </Typography>
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

            <FormControl className="flex py-2" fullWidth sx={{ m: 1 }}>
              <MyDatePicker text="Fecha desde" />
            </FormControl>
            <FormControl className="flex py-2" fullWidth sx={{ m: 1 }}>
              <MyDatePicker text="Fecha hasta" />
            </FormControl>
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
              <div className="flex">
                <Button variant="contained" endIcon={<SearchIcon />}>
                  Buscar
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <Accordion className="w-full" expanded>
          <AccordionSummary
            className="w-full"
            expandIcon={<GridExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
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

        <Pagination
          className="w-full my-8 justify-center"
          count={10}
          //   siblingCount={0}
          variant="outlined"
          shape="rounded"
        />
      </Box>
      <BasicSpeedDial />
    </>
  );
}
