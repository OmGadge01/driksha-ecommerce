import { Route } from "react-router-dom";

import AdminLayout from "../layout/AdminLayout";

import Dashboard from "../pages/admin/Dashboard";
import Products from "../pages/admin/Products";
import ProductForm from "../pages/admin/ProductForm";
import Categories from "../pages/admin/Categories";
import Orders from "../pages/admin/Orders";
import Customers from "../pages/admin/Customers";
import Settings from "../pages/admin/Settings";
import Banner from "../pages/admin/Banner";
import FaqManager from "../pages/admin/FaqManager";
import Newsletter from "../pages/admin/Newsletter";
import AdminProfile from "../pages/admin/AdminProfile";
import AdminChangePassword from "../pages/admin/AdminChangePassword";

const AdminRoutes = () => {
  return (
    <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<Dashboard />} />

      <Route path="products">
        <Route index element={<Products />} />
        <Route path="add" element={<ProductForm />} />
        <Route path="edit/:id" element={<ProductForm />} />
      </Route>

      <Route path="categories" element={<Categories />} />
      <Route path="orders" element={<Orders />} />
      <Route path="customers" element={<Customers />} />
      <Route path="settings" element={<Settings />} />
      <Route path="banner" element={<Banner />} />
      <Route path="faq" element={<FaqManager />} />
      <Route path="newsletter" element={<Newsletter />} />
      <Route path="profile" element={<AdminProfile />} />
      <Route path="change-password" element={<AdminChangePassword />} />
    
    </Route>
  );
};

export default AdminRoutes;
