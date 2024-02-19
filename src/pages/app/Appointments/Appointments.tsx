import Box from "@mui/material/Box";
import {
  Autocomplete,
  Button,
  Card,
  FormControlLabel,
  FormLabel,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { MODAL_TYPE } from "../../../constants/constants";
import { Delete, Edit } from "@mui/icons-material";
import { useEffect, useState } from "react";
import appointmentService from "../../../services/Appointment/appointment";
import { usePodoTable } from "../../../hooks/usePodoTable";
import { PodoTable } from "../../../components/TablePodo/Table";
import { FaEye } from "react-icons/fa6";
import { ModalManagement } from "../../../components/Modal/ModalManagement";
import { useModalsStore } from "../../../zustand/useModalsStore";
import { useAppointmentStore } from "../../../zustand/useAppointmentStore";
import AppointmentFilter from "../../../components/Forms/AppointmentForm/AppointmentFilter";
import { GetAppointmentFullPopulate } from "../../../interfaces/Appointment/appointmentFullPopulate";
import { MappedDataAppointment } from "../../../Utils/Appointment/MappingUtils";

export default function Appointments() {
  const { rows, rowModesModel, setRowModesModel, setRows } = usePodoTable();
  const [loading, setLoading] = useState(true);
  const { saveAppointment } = useAppointmentStore();
  const toggleModal = useModalsStore((state) => state.toggleModal);
  useEffect(() => {
    appointmentService
      .getAllAppointments()
      .then((response: GetAppointmentFullPopulate) => {
        const mappedData: any = MappedDataAppointment(response);
        setRows(mappedData);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const columns: GridColDef[] = [
    {
      field: "patient_name",
      headerName: "Nombre Paciente",
      type: "string",
      editable: true,
      flex: 1,
    },
    {
      field: "patient_last_name",
      headerName: "Apellidos Paciente",
      type: "string",
      editable: true,
      flex: 1,
    },

    {
      field: "work_center_name",
      headerName: "Clínica",
      type: "string",
      editable: true,
      flex: 1,
    },

    {
      field: "internal_num_invoice",
      headerName: "Código interno",
      type: "string",
      editable: true,
      flex: 2,
    },
    {
      field: "external_num_invoice",
      headerName: "Código externo",
      type: "string",
      editable: true,
      flex: 2,
    },
    {
      field: "employee_username",
      headerName: "Profesional",
      type: "string",
      editable: true,
      flex: 1,
    },

    {
      field: "appointment_type_name",
      headerName: "Tipo de cita",
      type: "string",
      editable: true,
      flex: 1,
    },
    {
      field: "datetime_appointment",
      headerName: "Fecha",
      type: "string",
      editable: true,
      flex: 1,
    },

    {
      field: "paid",
      headerName: "Pagado",
      type: "boolean",
      editable: true,
      flex: 1,
    },

    {
      field: "actions",
      width: 200,
      headerAlign: "center",
      headerName: "Acciones",
      renderCell: (params) => {
        return (
          <div className="w-full">
            <Button
              onClick={() => {
                console.log("hizo click", params.row);
                saveAppointment(params.row);
                toggleModal(MODAL_TYPE.APPOINTMENT_EDIT);
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

  return (
    <>
      <ModalManagement />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <AppointmentFilter toggleModal={toggleModal} />

        <div className="md:my-8 w-full flex flex-col items-center">
          <PodoTable
            rows={rows as unknown}
            setRowModesModel={setRowModesModel}
            setRows={setRows}
            rowModesModel={rowModesModel}
            columns={columns}
            loading={loading}
          ></PodoTable>
        </div>
      </Box>
    </>
  );
}
