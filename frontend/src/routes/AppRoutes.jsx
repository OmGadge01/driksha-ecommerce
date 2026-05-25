import {
  BrowserRouter,
  Routes,
} from "react-router-dom";

import AuthRoutes from "./AuthRoutes";
import CustomerRoutes from "./CustomerRoutes";
import AdminRoutes from "./AdminRoutes";

import ScrollToTop from "../components/common/ScrollToTop";

const AppRoutes = () => {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>
        {AuthRoutes()}

        {CustomerRoutes()}

        {AdminRoutes()}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;