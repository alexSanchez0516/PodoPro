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
} from "@mui/material";
import { top100Films } from "../../../constants/constants";
import MyDatePicker from "../../DatePicker/DatePicker";
import { useState } from "react";
import { ToggleSwitch } from "../../Switch/Toggle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { GridColDef, GridRenderEditCellParams } from "@mui/x-data-grid";
import DataGridEditabled from "../../DataGridEditabled/DataGridEditabled";
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
        <InputLabel htmlFor="outlined-adornment-amount">NIF/NIE/CIF</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start"></InputAdornment>}
          label="NIF/NIE/CIF"
        />
      </FormControl>

      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Dirección</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start"></InputAdornment>}
          label="NIF/NIE/CIF"
        />
      </FormControl>

      <FormControl fullWidth sx={{ m: 1 }}>
        <TextField id="outlined-helperText" label="Observaciones" />
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

      <FormControl className="flex" fullWidth sx={{ m: 1 }}>
        <ToggleSwitch text={"¿Tiene Seguro?"} />
        <ToggleSwitch
          text={"¿El coste ha sido liquidado por el seguro, al completo?"}
        />
      </FormControl>

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
            <DataGridEditabled
              onlyEdit={false}
              showHeader={false}
              rows={[]}
              columns={columns}
              // onCellClick={(event: any) => onCellClick(event)}
              hideFooterPagination={false}
              rowCount={0}
              rowsPerPageOptions={[50]}
              // pagination
              // page={1}
              // pageSize={pageSize}
              // onPageChange={handleNewPage}
            ></DataGridEditabled>
          </AccordionDetails>
        </Accordion>
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
