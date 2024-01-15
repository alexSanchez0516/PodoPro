import { AxiosError } from "axios";
import { TOAST } from "./constants";

export function handleApiError(error: AxiosError) {
  if (error?.response?.status === 409) {
    throw new Error("Error");
  }
  if (error.response?.status === 404) {
    throw new Error("Error");
  }
  if (error?.response?.status === 422) {
    throw new Error("Error");
  }
  if (error?.response?.status === 405) {
    throw new Error("Error");
  }
  if (error?.response?.status === 500) {
    throw new Error("Error del servidor");
  }

  return error;
}

export const errorToastManagment = () => {
  return TOAST.ERROR;
};
