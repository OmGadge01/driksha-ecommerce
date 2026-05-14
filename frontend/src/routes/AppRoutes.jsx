import {
  BrowserRouter,
  Routes,
} from "react-router-dom";

import AuthRoutes from "./AuthRoutes";
import CustomerRoutes from "./CustomerRoutes";
import AdminRoutes from "./AdminRoutes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {AuthRoutes()}

        {CustomerRoutes()}

        {AdminRoutes()}

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;