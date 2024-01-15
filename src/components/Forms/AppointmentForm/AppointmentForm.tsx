import {
  Autocomplete,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { top100Films } from "../../../constants/constants";
import MyDatePicker from "../../DatePicker/DatePicker";
const AppointmentForm = () => {
  return (
    <>
      <FormControl fullWidth sx={{ m: 1 }}>
        <Autocomplete
          style={{ width: "100%" }}
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Nombre" />}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <Autocomplete
          style={{ width: "100%" }}
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Apellidos" />}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <TextField
          id="outlined-helperText"
          label="Observaciones"
          helperText="Observaciones de la cita"
        />
      </FormControl>

      <FormControl fullWidth sx={{ m: 1 }}>
        <Autocomplete
          style={{ width: "100%" }}
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Clinica" />}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <MyDatePicker />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <Autocomplete
          style={{ width: "100%" }}
          disablePortal
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
        <InputLabel id="demo-simple-select-helper-label">Impuesto</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={10}
          label="Impuesto"
          //   onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>21%</MenuItem>
          <MenuItem value={20}>19%</MenuItem>
          <MenuItem value={30}>15%</MenuItem>
        </Select>
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
    </>
  );
};

export default AppointmentForm;
