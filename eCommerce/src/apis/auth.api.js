import { apiDefault } from ".";
import { ApiConstant } from "../constants/api.constant";

const authApi = () => ({
  register: async (data) => apiDefault.post(ApiConstant.auth.register, data),
  login: async (data) => apiDefault.post(ApiConstant.auth.login, data),
  refreshToken: async (data) =>
    apiDefault.post(ApiConstant.auth.refreshToken, data),
});

export const { register, login, refreshToken } = authApi();
