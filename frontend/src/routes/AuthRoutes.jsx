import { Route } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/customer/Home";

const AuthRoutes = () => {
  return (
    <>
  

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />
    </>
  );
};

export default AuthRoutes;