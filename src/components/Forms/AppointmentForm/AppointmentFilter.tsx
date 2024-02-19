import { GridSearchIcon } from "@mui/x-data-grid";
import Exports from "../../Buttons/Exports";
import {
  Autocomplete,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Create } from "@mui/icons-material";
import { FaRegFileExcel } from "react-icons/fa6";
import MyDatePicker from "../../DatePicker/DatePicker";
import { MODAL_TYPE } from "../../../constants/constants";

interface AppointmentFilterProps {
  toggleModal: (modal: string) => void;
}

const AppointmentFilter: React.FC<AppointmentFilterProps> = ({
  toggleModal,
}) => {
  return (
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
                options={[]}
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
                options={[]}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Número de factura interno" />
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
                options={[]}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Número de factura externo" />
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
                input={<OutlinedInput label="Servicio" />}
              ></Select>
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
  );
};

export default AppointmentFilter;
