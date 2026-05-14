<<<<<<< HEAD
import AppRoutes from "./routes/AppRoutes";
=======
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Layouts
import AdminLayout from "./layout/AdminLayout";

// Public Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Customer Pages
import Home from "./pages/customer/Home";
import Collections from "./pages/Customer/Collection";

// Admin Pages
import Dashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/Products";
import ProductForm from "./pages/admin/ProductForm";
import Categories from "./pages/admin/Categories";
import Orders from "./pages/admin/Orders";
import Customers from "./pages/admin/Customers";
import Settings from "./pages/admin/Settings";
import Banner from "./pages/admin/Banner";
import FaqManager from "./pages/admin/FaqManager";
import Newsletter from "./pages/admin/NewsLetter";
>>>>>>> 5d0b81b7984f35e18cf3c684c7d5dcf2144ab126

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Customer Routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/collections" element={<Collections />} />

        {/* Admin Routes */}
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
<<<<<<< HEAD

=======
          <Route path="settings" element={<Settings />} />
          <Route path="banner" element={<Banner />} />
          <Route path="faq" element={<FaqManager />} />
          <Route path="newsletter" element={<Newsletter /> } />
          
>>>>>>> 5d0b81b7984f35e18cf3c684c7d5dcf2144ab126
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
