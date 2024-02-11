import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import {
  Autocomplete,
  Avatar,
  Button,
  Card,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import MyDatePicker from "../../../components/DatePicker/DatePicker";
import { GridColDef, GridSearchIcon } from "@mui/x-data-grid";
import { top100Films } from "../../../constants/constants";
import Exports from "../../../components/Buttons/Exports";
import { Create, Delete, Edit } from "@mui/icons-material";
import { FaRegFileExcel } from "react-icons/fa";
import patientService from "../../../services/Patients/patients";
import {
  Meta,
  PatientResponseGETFullPopulate,
} from "../../../interfaces/interfaces";
import { useEffect, useState } from "react";
import { API_URL_STRAPI_FILES } from "../../../constants/endpoints";
import { FaEye } from "react-icons/fa6";
import { usePodoTable } from "../../../hooks/usePodoTable";
import { PodoTable } from "../../../components/TablePodo/Table";
import { useTableCrudBasic } from "../../../hooks/useTableCrudBasic";
import { toast } from "sonner";

export default function Patients() {
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
  const { handleService } = useTableCrudBasic();

  const [loading, setLoading] = useState(true);
  const [dataPaginate, setDataPaginate] = useState<Meta>();
  const [listPatients, setListPatients] = useState<any>([]);
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
      field: "img_profile",
      headerName: "Imagen",
      type: "string",
      editable: true,
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <Avatar src={params?.row?.img_profile} />
          </>
        );
      },
    },

    {
      field: "location",
      headerName: "Dirección",
      type: "string",
      editable: true,
      flex: 2,
    },
    {
      field: "tax_name",
      headerName: "NIF/NIE/CIF",
      type: "string",
      editable: true,
      flex: 1,
    },

    {
      field: "phone",
      headerName: "Teléfono",
      type: "string",
      editable: true,
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      type: "string",
      editable: true,
      flex: 1,
    },
    {
      field: "health_insurance",
      headerName: "Seguro médico",
      type: "boolean",
      editable: true,
      flex: 1,
    },

    {
      field: "createdAt",
      headerName: "Fecha de alta",
      type: "string",
      editable: true,
      flex: 1,
    },

    {
      field: "active",
      headerName: "Activo",
      type: "boolean",
      editable: true,
      flex: 1,
    },

    {
      field: "actions",
      width: 200,
      headerAlign: "center",
      headerName: "Acciones",
      renderCell: () => {
        return (
          <div className="w-full">
            <Button
              onClick={() => {
                console.log("hizo click");
                // toggleModal(MODAL_TYPE.WORK_CENTER_EDIT);
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

  useEffect(() => {
    patientService
      .getAllPatients()
      .then((response: PatientResponseGETFullPopulate) => {
        const mappedData = response.data.map((patient) => {
          const workCenters = patient.attributes.work_centers.data;

          return {
            id: patient.id,
            name: patient.attributes.name,
            last_name: patient.attributes.last_name,
            active: patient.attributes.active,
            country: patient.attributes.country,
            city: patient.attributes.city,
            code_postal: patient.attributes.code_postal,
            tax_name: patient.attributes.tax_name,
            location: patient.attributes.location,
            createdAt: patient.attributes.createdAt,
            updatedAt: patient.attributes.updatedAt,
            publishedAt: patient.attributes.publishedAt,
            phone: patient.attributes.phone,
            isMale: patient.attributes.isMale,
            email: patient.attributes.email,
            notes: patient.attributes.notes,
            health_insurance: patient.attributes.health_insurance ?? false,
            work_centers_id: workCenters.map(
              (workCenter: any) => workCenter.id
            ),
            work_centers_name: workCenters.map(
              (workCenter: any) => workCenter.attributes.name
            ),
            img_profile:
              API_URL_STRAPI_FILES +
              patient.attributes.img_profile.data?.attributes.url,
          };
        });
        console.log({ mappedData });
        setListPatients(mappedData);
        setDataPaginate(response.meta);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          margin: "0 1rem 0 1rem",
          width: "100%",
        }}
      >
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
          <PodoTable
            rows={listPatients as unknown}
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
