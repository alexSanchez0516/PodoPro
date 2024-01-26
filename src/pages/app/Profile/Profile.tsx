import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Checkbox,
  Divider,
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
} from "@mui/material";
import React, { useState } from "react";
import { top100Films } from "../../../constants/constants";
import Exports from "../../../components/Buttons/Exports";
import { FaRegFileExcel } from "react-icons/fa6";
import { GridSearchIcon } from "@mui/x-data-grid";
import { Cancel, Create, Save } from "@mui/icons-material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MyDatePicker from "../../../components/DatePicker/DatePicker";

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
const UserProfile = () => {
  //!https://devexpress.github.io/devextreme-ui-template-gallery/material.blue.light.compact/react/default/#/user-profile

  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <div className="w-full flex flex-col md:w-3/4 md:mx-5 h-screen">
          <Card className="p-5 flex justify-between items-center">
            <Typography>Configuración del perfil</Typography>
            <div className="flex gap-2 flex-wrap">
              <Button variant="outlined" startIcon={<Cancel />}>
                Cancelar
              </Button>
              <Button variant="contained" endIcon={<Save />}>
                Guardar
              </Button>
            </div>
          </Card>
          <Card className="flex justify-center items-center flex-wrap w-full mt-5">
            <Avatar
              sx={{ width: 150, height: 150 }}
              src="https://i.pravatar.cc/300"
            >
              <AssignmentIcon />
            </Avatar>

            <div className="flex flex-col md:flex-row p-5 justify-center items-center flex-wrap w-full">
              <FormControl sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Nombre
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start"></InputAdornment>
                  }
                  label="Nombre"
                />
              </FormControl>
              <FormControl sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Apellidos
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start"></InputAdornment>
                  }
                  label="Apellidos"
                />
              </FormControl>
              <FormControl sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  N. Identificación
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start"></InputAdornment>
                  }
                  label="N. Identificación"
                />
              </FormControl>
              <FormControl sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Num. Factura externo
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start"></InputAdornment>
                  }
                  label="Num. Factura externo"
                />
              </FormControl>
            </div>
          </Card>
          <div className="flex gap-4">
            <Card className="flex flex-col  justify-center items-center flex-wrap w-full mt-5">
              <Divider variant="fullWidth" className="w-full" />

              <div className="flex flex-col md:flex-row p-5 justify-center items-center flex-wrap w-full">
                <div className="flex w-full">
                  <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel id="demo-multiple-checkbox-label">
                      Clinícas en las que trabajas
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName}
                      onChange={handleChange}
                      input={
                        <OutlinedInput label="Clinícas en las que trabajas" />
                      }
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
                </div>
                <div className="flex w-full">
                  <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Email
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      startAdornment={
                        <InputAdornment position="start"></InputAdornment>
                      }
                      label="Email"
                    />
                  </FormControl>
                </div>
              </div>
            </Card>
            <Card className="flex py-5 flex-col justify-center items-center flex-wrap w-full mt-5">
              <Divider variant="fullWidth" className="w-full" />

              <div className="flex flex-col md:flex-row p-5 justify-center items-center flex-wrap w-full">
                <div className="flex flex-wrap w-full">
                  <FormControl fullWidth sx={{ m: 1 }}>
                    <Autocomplete
                      style={{ width: "100%" }}
                      disablePortal
                      id="combo-box-demo"
                      options={top100Films}
                      sx={{ width: 300 }}
                      renderInput={(params) => (
                        <TextField {...params} label="País" />
                      )}
                    />
                  </FormControl>
                  <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Ciudad
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      startAdornment={
                        <InputAdornment position="start"></InputAdornment>
                      }
                      label="Ciudad"
                    />
                  </FormControl>
                </div>

                <div className="flex flex-wrap w-full">
                  <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Estado/provincia/área
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      startAdornment={
                        <InputAdornment position="start"></InputAdornment>
                      }
                      label="Estado/provincia/área"
                    />
                  </FormControl>
                  <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Dirección
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      startAdornment={
                        <InputAdornment position="start"></InputAdornment>
                      }
                      label="Dirección"
                    />
                  </FormControl>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Box>
    </>
  );
};

export default UserProfile;
