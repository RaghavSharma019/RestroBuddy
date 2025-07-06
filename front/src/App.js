import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./screens/superadmin/LoginPage";
import Dashboard from "./screens/superadmin/Dashboard";
import AdminLogin from "./screens/admin/AdminLogin";
import AdminDashboard from "./screens/admin/AdminDashboard";
import FoodBooking from "./screens/FoodBooking/FoodBooking";
import Plusminus from "./components/Plusminus/Plusminus";
import Home from "./components/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<LoginPage />} path="/loginpage" />
          <Route element={<Dashboard />} path="/dashboard/*" />
          <Route element={<AdminLogin />} path="/adminlogin" />
          <Route element={<AdminDashboard />} path="/admindashboard/*" />
          <Route element={<FoodBooking />} path="/foodbooking" />
          <Route element={<Plusminus />} path="/plusminus" />
          <Route element={<Home />} path="/" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
