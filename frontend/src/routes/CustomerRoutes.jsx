import { Route } from "react-router-dom";

import Home from "../pages/customer/Home";
import Collections from "../pages/customer/Collection";
import ProductDetails from "../pages/Customer/ProductDetails";
import Cart from "../pages/customer/Cart";
import Checkout from "../pages/customer/Checkout";

const CustomerRoutes = () => {
  return (
    <>
      <Route path="/home" element={<Home />} />

      <Route path="/collections" element={<Collections />} />

      <Route path="/product/:id" element={<ProductDetails />} />

      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </>
  );
};

export default CustomerRoutes;
