import { Route } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";

const AuthRoutes = () => {
  return (
    <>
      <Route path="/" element={<Login />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />
    </>
  );
};

export default AuthRoutes;