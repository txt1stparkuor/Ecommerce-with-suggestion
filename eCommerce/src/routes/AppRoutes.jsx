import { useRoutes } from "react-router-dom";
import generalRoutes from "./GeneralRoutes";
import userRoutes from "./UserRoutes";
import adminRoutes from "./AdminRoutes";

const AppRoutes = () => {
  const element = useRoutes([...generalRoutes, ...userRoutes,...adminRoutes]);
  return element;
};

export default AppRoutes;
