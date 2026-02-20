import { api, apiDefault, apiDefaultUpload } from ".";
import { ApiConstant } from "../constants/api.constant";

const productApi = () => ({
  getProducts: async (params) =>
    apiDefault.get(ApiConstant.products.base, { params }),
  getProductById: async (productId) =>
    apiDefault.get(ApiConstant.products.getById(productId)),
  getProductReviews: async (productId, params) =>
    apiDefault.get(ApiConstant.products.getReviews(productId), { params }),
  addProductReview: async (productId, data) =>
    api.post(ApiConstant.products.getReviews(productId), data),
  deleteProduct: async (productId) =>
    api.delete(ApiConstant.products.getById(productId)),
  createProduct: async (data) => apiDefaultUpload.post(ApiConstant.products.base, data),
  updateProduct: async (productId, data) =>
    apiDefaultUpload.put(ApiConstant.products.getById(productId), data),
});

export const {
  getProducts,
  getProductById,
  getProductReviews,
  addProductReview,
  deleteProduct,
  createProduct,
  updateProduct,
} = productApi();
