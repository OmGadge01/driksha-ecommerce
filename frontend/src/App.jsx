import Navbar from './components/layout/Navbar'
import AdminLayout from './layout/AdminLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup'
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
      </Routes>

      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/admin" element={<AdminLayout />} />
      </Routes>

    </BrowserRouter>
  );

}

export default App;