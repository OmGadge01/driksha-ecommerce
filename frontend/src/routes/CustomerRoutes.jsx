import { Route } from "react-router-dom";

import Home from "../pages/customer/Home";
import Collections from "../pages/customer/Collection";
import ProductDetails from "../pages/Customer/ProductDetails";
import Cart from "../pages/customer/Cart";

const CustomerRoutes = () => {
  return (
    <>
      <Route path="/home" element={<Home />} />

      <Route path="/collections" element={<Collections />} />

      <Route path="/product/:id" element={<ProductDetails />} />

      <Route path="/cart" element={<Cart />} />
    </>
  );
};

export default CustomerRoutes;
