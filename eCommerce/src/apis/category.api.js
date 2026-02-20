import { apiDefault } from '.'
import { ApiConstant } from '../constants/api.constant'

const categoryApi = () => ({
  getCategoriesWithProducts: async () => apiDefault.get(ApiConstant.categories.withProducts),
})

export const { getCategoriesWithProducts } = categoryApi()
