import { Button, Modal } from "@mui/material";
import { MODAL_TYPE } from "../../constants/constants";
import { useModalsStore } from "../../Zustand/useModalsStore";

export const ModalManagement = () => {
  const toggleModal = useModalsStore((state) => state.toggleModal);
  const showCreatePatient = useModalsStore((state) => state.showPatientCreate);
  const showCreateWorkCenter = useModalsStore(
    (state) => state.showWorkCenterCreate
  );
  const showClinicCreate = useModalsStore((state) => state.showClinicCreate);
  const showAppointmentCreate = useModalsStore(
    (state) => state.showAppointmentCreate
  );
  const showInvoiceCreate = useModalsStore((state) => state.showInvoiceCreate);

  const handleClose = (type: string) => {
    toggleModal(type);
  };

  return (
    <>
      <Modal
        open={showCreatePatient}
        onClose={() => handleClose(MODAL_TYPE.PATIENT_CREATE)}
      >
        {/* Contenido del modal para createPatient */}
        <div>
          <h2>Create Patient Modal</h2>
          <Button onClick={() => handleClose(MODAL_TYPE.PATIENT_CREATE)}>
            Close
          </Button>
        </div>
      </Modal>

      <Modal
        open={showCreateWorkCenter}
        onClose={() => handleClose(MODAL_TYPE.WORK_CENTER_CREATE)}
      >
        {/* Contenido del modal para createWorkCenter */}
        <div>
          <h2>Create Work Center Modal</h2>
          <Button onClick={() => handleClose(MODAL_TYPE.WORK_CENTER_CREATE)}>
            Close
          </Button>
        </div>
      </Modal>

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

      <Modal
        open={showAppointmentCreate}
        onClose={() => handleClose(MODAL_TYPE.APPOINTMENT_CREATE)}
      >
        {/* Contenido del modal para appointmentCreate */}
        <div>
          <h2>Appointment Create Modal</h2>
          <Button onClick={() => handleClose(MODAL_TYPE.APPOINTMENT_CREATE)}>
            Close
          </Button>
        </div>
      </Modal>

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
