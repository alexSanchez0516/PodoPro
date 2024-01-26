import {
  Autocomplete,
  Box,
  Button,
  Card,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { GridColDef, GridSearchIcon } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Clinic } from "../../../interfaces/interfaces";
import { TOAST, top100Films } from "../../../constants/constants";
import { clinicValidationSchemaCreate } from "../../../assets/SchemaValidation/clinicsSchema";
import { toast } from "sonner";
import clinicService from "../../../services/Clinics/clinics";
import { useFormik } from "formik";
import { errorToastManagment } from "../../../constants/handleApiErrors";
import Exports from "../../../components/Buttons/Exports";
import { Create, Delete, Edit } from "@mui/icons-material";
import DataGridEditabled from "../../../components/DataGridEditabled/DataGridEditabled";
import { FaRegFileExcel } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";

const Works = () => {
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
      width: 200,
      headerName: "Acciones",
      renderCell: () => {
        return (
          <div className="w-full">
            <Button title="Editar fila" color="primary" className="">
              <Edit />
            </Button>

            <Button title="Ver podólogos" color="primary" className="">
              <FaEye />
            </Button>
            <Button title="Eliminar fila" color="error" className="">
              <Delete />
            </Button>
          </div>
        );
      },
    },
  ];
  const [listWorksCenters, setListWorksCenters] = useState<Clinic[]>([]);
  useEffect(() => {
    clinicService.getAllClinics().then((response: Clinic[]) => {
      // Asumiendo que response contiene un array de clínicas
      setListWorksCenters(response);
    });
  }, []);

  const handleSave = (bodyNewWorkCenter: Clinic) => {
    const { id, ...restOfBody } = bodyNewWorkCenter;
    const isUpdating = !!id;

    const promise = isUpdating
      ? clinicService.updateClinic(id!, restOfBody)
      : clinicService.addClinic(bodyNewWorkCenter);

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

  const formikCreate = useFormik<Clinic>({
    initialValues: {
      id: null,
      name: null,
      location: null,
      phone: null,
      updated_at: null,
      created_at: null,
      active: null,
    },
    validationSchema: clinicValidationSchemaCreate,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      handleSave(values);
      setSubmitting(false);
    },
  });

  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
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
      </Box>
    </>
  );
};

export default Works;
