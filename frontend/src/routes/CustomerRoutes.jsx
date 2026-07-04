import { Route } from "react-router-dom";

import Home from "../pages/Customer/Home";
import Collections from "../pages/Customer/Collection";
import ProductDetails from "../pages/Customer/ProductDetails";
import Cart from "../pages/Customer/Cart";
import Checkout from "../pages/Customer/Checkout";
import NewArrivals from "../pages/Customer/NewArrivals";
import Wishlist from "../pages/Customer/Wishlist";
import Account from "../pages/Customer/Account";

const CustomerRoutes = () => {
  return (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/new-arrivals" element={<NewArrivals />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/account" element={<Account />} />
    </>
  );
};

export default CustomerRoutes;
