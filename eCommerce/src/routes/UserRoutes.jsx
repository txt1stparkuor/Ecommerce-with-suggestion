import UserLayout from "../layouts/UserLayout";
import Home from "../pages/Home/Home";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Cart from "../pages/Cart/Cart";
import OrderHistory from "../pages/OrderHistory/OrderHistory";
import Checkout from "../pages/Checkout/Checkout";
import OrderDetail from "../pages/OrderDetail/OrderDetail";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";


const userRoutes = [
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:productId",
        element: <ProductDetail />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "cart",
            element: <Cart />,
          },
          {
            path: "checkout",
            element: <Checkout />,
          },
          {
            path: "my-orders",
            element: <OrderHistory />,
          },
          {
            path: "orders/:orderId",
            element: <OrderDetail />,
          },
        ]
      },
    ],
  },
];

export default userRoutes;
