import Navbar from './components/layout/Navbar'
import Home from './pages/Home';
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
    </BrowserRouter>
  );
}

export default App
