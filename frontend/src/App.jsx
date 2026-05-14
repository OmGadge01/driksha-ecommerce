import Navbar from './components/layout/Navbar'
import Collection from './pages/Collection';
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
        <Route
          path="/collections"
          element={<Collection />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App
