import { Route } from "react-router-dom";

import AdminLayout from "../layout/AdminLayout";

import Dashboard from "../pages/admin/Dashboard";
import Products from "../pages/admin/Products";
import ProductForm from "../pages/admin/ProductForm";
import Categories from "../pages/admin/Categories";
import Orders from "../pages/admin/Orders";
import Customers from "../pages/admin/Customers";

const AdminRoutes = () => {
  return (
    <Route
      path="/admin"
      element={<AdminLayout />}
    >
      <Route index element={<Dashboard />} />

      <Route path="products">
        <Route index element={<Products />} />

        <Route
          path="add"
          element={<ProductForm />}
        />

        <Route
          path="edit/:id"
          element={<ProductForm />}
        />
      </Route>

      <Route
        path="categories"
        element={<Categories />}
      />

      <Route
        path="orders"
        element={<Orders />}
      />

      <Route
        path="customers"
        element={<Customers />}
      />
    </Route>
  );
};

export default AdminRoutes;