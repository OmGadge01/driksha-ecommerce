import AppRoutes from "./routes/AppRoutes";

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

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
