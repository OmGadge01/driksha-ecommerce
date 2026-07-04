import { Route } from "react-router-dom";

import Home from "../pages/customer/Home";
import Collections from "../pages/customer/Collection";
import ProductDetails from "../pages/customer/ProductDetails";
import Cart from "../pages/customer/Cart";
import Checkout from "../pages/customer/Checkout";
import NewArrivals from "../pages/customer/NewArrivals";
import Wishlist from "../pages/customer/Wishlist";
import Account from "../pages/customer/Account";

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
