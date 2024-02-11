import { Button, Modal, Typography } from "@mui/material";
import { MODAL_TYPE } from "../../constants/constants";
import { useModalsStore } from "../../zustand/useModalsStore";
import { CustomModalPodo } from "./CustomModal";
import Statistics from "../../pages/app/Statistics/Statistics";
import View from "../Appointment/View";

export const ModalManagement = () => {
  const toggleModal = useModalsStore((state) => state.toggleModal);
  const showCreatePatient = useModalsStore((state) => state.showPatientCreate);
  const showEditWorkCenter = useModalsStore(
    (state) => state.showEditWorkCenter
  );
  const showClinicCreate = useModalsStore((state) => state.showClinicCreate);
  const showAppointmentCreate = useModalsStore(
    (state) => state.showAppointmentCreate
  );
  const showAppointmentEdit = useModalsStore(
    (state) => state.showAppointmentEdit
  );
  const showInvoiceCreate = useModalsStore((state) => state.showInvoiceCreate);

  const handleClose = (type: string) => {
    toggleModal(type);
  };

  console.log("showEditWorkCenter --> ", showEditWorkCenter);
  return (
    <>
      <CustomModalPodo
        width={80}
        large
        body={<>sdsd</>}
        open={showCreatePatient}
        handleClose={() => handleClose(MODAL_TYPE.PATIENT_CREATE)}
        title={"Crear Paciente"}
      ></CustomModalPodo>

      <CustomModalPodo
        width={80}
        large
        wide={true}
        body={<Statistics />}
        open={showEditWorkCenter}
        handleClose={() => handleClose(MODAL_TYPE.WORK_CENTER_CREATE)}
        title={"Editar Clínica"}
      ></CustomModalPodo>

      <Modal
        open={showClinicCreate}
        onClose={() => handleClose(MODAL_TYPE.CLINIC_CREATE)}
      >
        {/* Contenido del modal para clinicCreate */}
        <div>
          <h2>Clinic Create Modal</h2>
          <Button onClick={() => handleClose(MODAL_TYPE.CLINIC_CREATE)}>
            Close
          </Button>
        </div>
      </Modal>

      <CustomModalPodo
        width={80}
        large
        wide={true}
        body={<View />}
        open={showAppointmentEdit}
        handleClose={() => handleClose(MODAL_TYPE.APPOINTMENT_EDIT)}
        title={"Identificador Cita ADC234"}
      ></CustomModalPodo>

      <CustomModalPodo
        width={80}
        large
        wide={true}
        body={<View />}
        open={showAppointmentCreate}
        handleClose={() => handleClose(MODAL_TYPE.APPOINTMENT_CREATE)}
        title={"Crear Cita"}
      ></CustomModalPodo>

      <Modal
        open={showInvoiceCreate}
        onClose={() => handleClose(MODAL_TYPE.INVOICE_CREATE)}
      >
        {/* Contenido del modal para invoiceCreate */}
        <div>
          <h2>Invoice Create Modal</h2>
          <Button onClick={() => handleClose(MODAL_TYPE.INVOICE_CREATE)}>
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
};
