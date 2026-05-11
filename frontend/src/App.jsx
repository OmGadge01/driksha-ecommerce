import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminLayout from "./layout/AdminLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/admin" element={<AdminLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;