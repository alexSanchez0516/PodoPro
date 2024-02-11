import { toast } from "sonner";
import { TOAST } from "../constants/constants";
import { errorToastManagment } from "../constants/handleApiErrors";

export const useTableCrudBasic = () => {
  interface Props {
    row: any;
    service: any;
    action?: any;
  }

  /**
   * Función que hace la creación de una fila en la tabla básica, controlando errores y gestionando la informacion mediante el toast.
   * @param row: Fila de la tabla
   * @param service: Servicio de acción con el backend
   * @param action: Acciones a realizar con la data que devuelve el endpoint
   */
  const handleService = ({ row, service, action }: Props) => {
    console.log("entra");
    console.log(row);
    toast.promise(service(row), {
      loading: TOAST.LOADING,
      success: (data) => {
        console.log(data);
        action?.(data, row);
        return TOAST.SUCCESS;
      },
      error: errorToastManagment,
    });
  };

  /**
   * Función que elimina la fila de una tabla controlando los errores
   * @param id Id de la fila a eliminar
   */
  const handleDelete = ({ id, service, rows, setRows }: any) => {
    toast.promise(service(id as string), {
      loading: TOAST.LOADING,
      success: (data: any) => {
        const filterRows = rows.filter((row: any) => row.id !== id);
        data && setRows(filterRows);
        return TOAST.SUCCESS;
      },
      error: errorToastManagment,
    });
  };

  return {
    handleService,
    handleDelete,
  };
};
