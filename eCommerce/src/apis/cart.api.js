import { api } from '.'
import { ApiConstant } from '../constants/api.constant'

const cartApi = () => ({
  getCart: async () => api.get(ApiConstant.cart.base),
  addToCart: async (data) => api.post(ApiConstant.cart.cartItems, data),
  updateCartItem: async ({ itemId, quantity }) => api.put(ApiConstant.cart.item(itemId), { quantity }),
  deleteCartItem: async (itemId) => api.delete(ApiConstant.cart.item(itemId)),
})

export const { getCart, addToCart, updateCartItem, deleteCartItem } = cartApi()
