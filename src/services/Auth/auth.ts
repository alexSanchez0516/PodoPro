import axios from "axios";
import { LoginRequest, LoginResponse } from "../../interfaces/interfaces";
import { API_URL_STRAPI } from "../../constants/endpoints";
import { UserAuthFullPopulateByID } from "../../interfaces/auth";

const API_URL = "/auth";

const authService = {
  login: async (body: LoginRequest): Promise<LoginResponse> => {
    const response = await axios.post<LoginResponse>(
      `${API_URL_STRAPI}${API_URL}/local`,
      body
    );
    return response.data;
  },
  getUserById: async (
    id: number | string
  ): Promise<UserAuthFullPopulateByID> => {
    const response = await axios.get<UserAuthFullPopulateByID>(
      `${API_URL_STRAPI}/users/${id}?populate[0]=work_centers`
    );
    return response.data;
  },
};

export default authService;
