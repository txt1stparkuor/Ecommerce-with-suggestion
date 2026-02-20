export const ApiConstant = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    refreshToken: "/auth/refresh-token",
    changePassword: "/auth/change-password",
    verifyPassword: "/auth/verify-password",
  },
  categories: {
    base: "/categories",
    withProducts: "/categories/with-products",
  },
  products: {
    base: "/products",
    getById: (productId) => `/products/${productId}`,
    getReviews: (productId) => `/products/${productId}/reviews`,
  },
  users: {
    base: "/users",
    getById: (userId) => `/users/${userId}`,
    getCurrentUser: "/users/me",
  },
  images: {
    base: "/images",
  },
  cart: {
    base: "/cart",
    cartItems: "/cart/items",
    item: (itemId) => `/cart/items/${itemId}`,
  },
  orders: {
    base: "/orders",
    myOrders: "/orders/me",
    getById: (orderId) => `/orders/${orderId}`,
    cancel: (orderId) => `/orders/${orderId}/cancel`,
    updateStatus: (orderId) => `/orders/${orderId}/status`,
  },
};
