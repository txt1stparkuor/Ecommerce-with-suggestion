import { api } from ".";
import { ApiConstant } from "../constants/api.constant";

const userApi = () => ({
  getCurrentUser: async () => api.get(ApiConstant.users.getCurrentUser),
  getUsers: async (params) => api.get(ApiConstant.users.base, { params }),
  getUserById: async (userId) => api.get(ApiConstant.users.getById(userId)),
  updateUser: async (userId, data) =>
    api.put(ApiConstant.users.getById(userId), data),
  deleteUser: async (userId) => api.delete(ApiConstant.users.getById(userId)),
  createUser: async (data) => api.post(ApiConstant.users.base, data),
});

export const {
  getCurrentUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  createUser,
} = userApi();
