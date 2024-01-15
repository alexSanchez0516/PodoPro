import axios from "axios";
import { Bill } from "../../interfaces/interfaces";

const API_URL = "URL_DEL_API"; // Reemplaza con la URL de tu API

const billService = {
  getAllBills: async (): Promise<Bill[]> => {
    const response = await axios.get<Bill[]>(`${API_URL}/bills`);
    return response.data;
  },

  getBillById: async (id: number): Promise<Bill> => {
    const response = await axios.get<Bill>(`${API_URL}/bills/${id}`);
    return response.data;
  },

  addBill: async (bill: Bill): Promise<Bill> => {
    const response = await axios.post<Bill>(`${API_URL}/bills`, bill);
    return response.data;
  },

  updateBill: async (id: number, bill: Bill): Promise<Bill> => {
    const response = await axios.put<Bill>(`${API_URL}/bills/${id}`, bill);
    return response.data;
  },

  deleteBill: async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/bills/${id}`);
  },
};

export default billService;
