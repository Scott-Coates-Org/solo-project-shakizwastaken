import "./styles/app.css";

//screen imports
import HomeScreen from "./screens/Home";
import LoginScreen from "./screens/Login";
import AuthRoute from "./components/utils/PrivateRoute";
import AdminDashboardScreen from "./screens/admin/Dashboard";

import { Routes, Route } from "react-router-dom";
import { useAuth } from "./hooks/authHooks";

function App() {
  useAuth(); //init auth

  return (
    <div className="app_container">
      <Routes>
        <Route element={<AuthRoute />}>
          <Route path="/dashboard" element={<AdminDashboardScreen />} />
        </Route>

        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </div>
  );
}

export default App;
