import Navbar from './components/layout/Navbar'
import AdminLayout from './layout/AdminLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup'
import Login from "../src/pages/Login"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

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
         <Route
          path="/login"
          element={<Login />}
        />
      </Routes>

      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/admin" element={<AdminLayout />} />
      </Routes>

    </BrowserRouter>
  );
<<<<<<< HEAD
=======

>>>>>>> 22fa1c69a29979b434be97c66c97a272bb26dcb3
}

export default App;