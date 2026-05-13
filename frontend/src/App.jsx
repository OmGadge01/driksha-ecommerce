import Navbar from './components/layout/Navbar'
import AdminLayout from './layout/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import Categories from './pages/admin/Categories';
import Orders from './pages/admin/Orders';
import ProductForm from './pages/admin/ProductForm';
import Products from './pages/admin/Products';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Customers from './pages/admin/Customers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={<Home/>}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
      </Routes>

      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/admin" element={<AdminLayout />} >
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="products/add" element={<ProductForm /> } />
          <Route path="products/edit/:id" element={<ProductForm /> } />
          <Route path="categories" element={<Categories />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
        </Route>
         

      </Routes>

    </BrowserRouter>
  );

}

export default App;