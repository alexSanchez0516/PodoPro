import {
  Autocomplete,
  Box,
  Button,
  Card,
  FormControl,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { top100Films } from "../../../constants/constants";
import { GridColDef, GridSearchIcon } from "@mui/x-data-grid";
import Exports from "../../../components/Buttons/Exports";
import { FaRegFileExcel } from "react-icons/fa6";
import { Create, Delete, Edit } from "@mui/icons-material";
import { SyntheticEvent, useState } from "react";
import DataGridEditabled from "../../../components/DataGridEditabled/DataGridEditabled";

function CustomTabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const ControlPanel = () => {
  const [value, setValue] = useState(0);
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
      headerName: "Dirección",
      type: "string",
      editable: true,
      flex: 2,
    },

    {
      field: "location",
      headerName: "Teléfono",
      type: "string",
      editable: true,
      flex: 1,
    },
    {
      field: "active",
      headerName: "Activa",
      type: "boolean",
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
  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
        <Card className="w-full md:mx-5">
          <div className="flex flex-col p-5 justify-center items-center flex-wrap w-full mt-5">
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
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Porcentajes" {...a11yProps(0)} />
                  <Tab label="Servicios" {...a11yProps(1)} />
                  <Tab label="Alertas" {...a11yProps(2)} />
                  {/* <Tab label="Ajustes" {...a11yProps(3)} /> */}
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <div className="md:my-8 md:mx-5 w-full flex flex-col items-center">
                  <DataGridEditabled
                    onlyEdit={true}
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
                    pagination
                    page={1}
                    // pageSize={pageSize}
                    // onPageChange={handleNewPage}
                  ></DataGridEditabled>
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <div className="md:my-8 md:mx-5 w-full flex flex-col items-center">
                  <DataGridEditabled
                    onlyEdit={true}
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
                    pagination
                    page={1}
                    // pageSize={pageSize}
                    // onPageChange={handleNewPage}
                  ></DataGridEditabled>
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <div className="md:my-8 md:mx-5 w-full flex flex-col items-center">
                  <DataGridEditabled
                    onlyEdit={true}
                    // loading={true}
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
                    pagination
                    page={1}
                    // pageSize={pageSize}
                    // onPageChange={handleNewPage}
                  ></DataGridEditabled>
                </div>
              </CustomTabPanel>
              {/* <CustomTabPanel value={value} index={3}>
                <div className="md:my-8 md:mx-5 w-full flex flex-col items-center">
                  <Card className="w-full md:mx-5">
                    <div className="flex flex-col p-5 justify-center items-center flex-wrap w-full mt-5">
                      <Typography variant="h3" className="ml-5 pb-8">
                        Clinicas
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
                              <TextField {...params} label="Búsqueda" />
                            )}
                          />
                        </FormControl>
                      </div>
                      <div className="flex justify-center w-full my-5">
                        <Button
                          variant="contained"
                          endIcon={<GridSearchIcon />}
                        >
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
                </div>
              </CustomTabPanel> */}
            </Box>
          </div>
        </Card>
      </Box>
    </>
  );
};

export default ControlPanel;
