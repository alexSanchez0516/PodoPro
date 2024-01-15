import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Box,
  Button,
  Card,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Pagination,
  TextField,
  Typography,
} from "@mui/material";
import { GridExpandMoreIcon, GridSearchIcon } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import BasicSpeedDial from "../../components/SpeedDial";
import { useEffect, useState } from "react";
import { Clinic } from "../../interfaces/interfaces";
import { TOAST, top100Films } from "../../constants/constants";
import { clinicValidationSchemaCreate } from "../../assets/SchemaValidation/clinicsSchema";
import { toast } from "sonner";
import clinicService from "../../services/Clinics/clinics";
import { useFormik } from "formik";
import { errorToastManagment } from "../../constants/handleApiErrors";

const Works = () => {
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
        <Card className="w-full">
          <div className="flex p-5 flex-wrap w-full mt-5">
            <Typography variant="h3" className="ml-5 pb-8">
              Clinicas
            </Typography>
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

            <div className="flex justify-end w-full mb-5">
              <Button variant="contained" endIcon={<GridSearchIcon />}>
                Buscar
              </Button>
            </div>
          </div>
        </Card>

        {listWorksCenters.map((workCenter: Clinic, index: number) => (
          <Accordion className="w-full" expanded key={index + 1222}>
            <AccordionSummary
              className="w-full"
              expandIcon={<GridExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Clinica {workCenter.name}</Typography>
            </AccordionSummary>
            <AccordionDetails className="w-full">
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-nombre">
                  Nombre
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-nombre"
                  startAdornment={
                    <InputAdornment position="start"></InputAdornment>
                  }
                  value={workCenter.name}
                  label="Nombre"
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-direction">
                  Dirección
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-direction"
                  startAdornment={
                    <InputAdornment position="start"></InputAdornment>
                  }
                  label="Dirección"
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-tel">
                  Teléfono
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-tel"
                  startAdornment={
                    <InputAdornment position="start"></InputAdornment>
                  }
                  label="Teléfono"
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-cif">CIF</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-cif"
                  startAdornment={
                    <InputAdornment position="start"></InputAdornment>
                  }
                  label="CIF"
                />
              </FormControl>

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
        ))}

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
};

export default Works;
