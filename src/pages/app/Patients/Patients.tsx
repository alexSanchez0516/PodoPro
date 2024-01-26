import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import {
  Autocomplete,
  Button,
  Card,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import MyDatePicker from "../../../components/DatePicker/DatePicker";
import {
  GridColDef,
  GridExpandMoreIcon,
  GridRenderEditCellParams,
  GridSearchIcon,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { top100Films } from "../../../constants/constants";
import Exports from "../../../components/Buttons/Exports";
import { Add, Create, Delete, Edit } from "@mui/icons-material";
import DataGridEditabled from "../../../components/DataGridEditabled/DataGridEditabled";
import { FaRegFileExcel } from "react-icons/fa";
export default function Patients() {
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Nombre",
      type: "string",
      editable: true,
      flex: 1,
    },
    {
      field: "last_name",
      headerName: "Apellidos",
      type: "string",
      editable: true,
      flex: 1,
    },

    {
      field: "location",
      headerName: "Dirección",
      type: "string",
      editable: true,
      flex: 2,
    },
    {
      field: "num_document",
      headerName: "NIF/NIE/CIF",
      type: "string",
      editable: true,
      flex: 1,
    },

    {
      field: "tel",
      headerName: "Teléfono",
      type: "string",
      editable: true,
      flex: 1,
    },

    {
      field: "actions",
      width: 140,
      headerName: "Acciones",
      renderCell: () => {
        return (
          <div className="w-full">
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

  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
        <Card className="w-full md:mx-5">
          <div className="flex flex-col p-5 justify-center items-center flex-wrap w-full mt-5">
            <Typography variant="h3" className="ml-5 pb-8 text-center">
              Pacientes
            </Typography>
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

              <FormControl fullWidth sx={{ m: 1 }}>
                <MyDatePicker />
              </FormControl>
            </div>
            <div className="w-full flex items-center justify-center">
              <FormControl className="items-center" fullWidth sx={{ m: 1 }}>
                <>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Clínica
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className="mb-5"
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
                </>
              </FormControl>
            </div>
          </div>
        </Card>

        <div className="md:my-8 md:mx-5 w-full flex flex-col items-center">
          <DataGridEditabled
            onlyEdit={false}
            showHeader={false}
            rows={[
              {
                id: "1212ABCSD",
                name: "Cristina",
                last_name: "Holgado perez",
                location: "123 Main St, City",
                num_document: "123456789",
                tel: "555-1234",
              },
              {
                id: "ABYTD3434",
                name: "Alexander",
                last_name: "sacnehz villegas",
                location: "456 Oak St, Town",
                num_document: "987654321",
                tel: "555-5678",
              },
              {
                id: "1212ABCSD",
                name: "Cristina",
                last_name: "Holgado perez",
                location: "123 Main St, City",
                num_document: "123456789",
                tel: "555-1234",
              },
              {
                id: "ABYTD3434",
                name: "Alexander",
                last_name: "sacnehz villegas",
                location: "456 Oak St, Town",
                num_document: "987654321",
                tel: "555-5678",
              },
              {
                id: "1212ABCSD",
                name: "Cristina",
                last_name: "Holgado perez",
                location: "123 Main St, City",
                num_document: "123456789",
                tel: "555-1234",
              },
              {
                id: "ABYTD3434",
                name: "Alexander",
                last_name: "sacnehz villegas",
                location: "456 Oak St, Town",
                num_document: "987654321",
                tel: "555-5678",
              },
              {
                id: "1212ABCSD",
                name: "Cristina",
                last_name: "Holgado perez",
                location: "123 Main St, City",
                num_document: "123456789",
                tel: "555-1234",
              },
              {
                id: "ABYTD3434",
                name: "Alexander",
                last_name: "sacnehz villegas",
                location: "456 Oak St, Town",
                num_document: "987654321",
                tel: "555-5678",
              },
              {
                id: "1212ABCSD",
                name: "Cristina",
                last_name: "Holgado perez",
                location: "123 Main St, City",
                num_document: "123456789",
                tel: "555-1234",
              },
              {
                id: "ABYTD3434",
                name: "Alexander",
                last_name: "sacnehz villegas",
                location: "456 Oak St, Town",
                num_document: "987654321",
                tel: "555-5678",
              },
              {
                id: "1212ABCSD",
                name: "Cristina",
                last_name: "Holgado perez",
                location: "123 Main St, City",
                num_document: "123456789",
                tel: "555-1234",
              },
              {
                id: "ABYTD3434",
                name: "Alexander",
                last_name: "sacnehz villegas",
                location: "456 Oak St, Town",
                num_document: "987654321",
                tel: "555-5678",
              },
              {
                id: "1212ABCSD",
                name: "Cristina",
                last_name: "Holgado perez",
                location: "123 Main St, City",
                num_document: "123456789",
                tel: "555-1234",
              },
              {
                id: "ABYTD3434",
                name: "Alexander",
                last_name: "sacnehz villegas",
                location: "456 Oak St, Town",
                num_document: "987654321",
                tel: "555-5678",
              },
              {
                id: "1212ABCSD",
                name: "Cristina",
                last_name: "Holgado perez",
                location: "123 Main St, City",
                num_document: "123456789",
                tel: "555-1234",
              },
              {
                id: "ABYTD3434",
                name: "Alexander",
                last_name: "sacnehz villegas",
                location: "456 Oak St, Town",
                num_document: "987654321",
                tel: "555-5678",
              },
              {
                id: "1212ABCSD",
                name: "Cristina",
                last_name: "Holgado perez",
                location: "123 Main St, City",
                num_document: "123456789",
                tel: "555-1234",
              },
              {
                id: "ABYTD3434",
                name: "Alexander",
                last_name: "sacnehz villegas",
                location: "456 Oak St, Town",
                num_document: "987654321",
                tel: "555-5678",
              },
            ]}
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
        </div>
      </Box>
    </>
  );
}
