import { apiDefault } from '.'
import { ApiConstant } from '../constants/api.constant'

const categoryApi = () => ({
  getCategoriesWithProducts: async () => apiDefault.get(ApiConstant.categories.withProducts),
  getAllCategories: async () => apiDefault.get(ApiConstant.categories.base),
  getLeafCategories: async (params) => apiDefault.get(ApiConstant.categories.leaf, { params }),
})

export const { getCategoriesWithProducts, getAllCategories, getLeafCategories } = categoryApi()
