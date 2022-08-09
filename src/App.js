import "./styles/app.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";

//screen imports
import HomeScreen from "./screens/Home";
import LoginScreen from "./screens/Login";
import PrivateRoute from "./components/utils/PrivateRoute";
import AdminDashboardScreen from "./screens/admin/Dashboard";

function App() {
  return (
    <div className="app_container">
      <Routes>
        <Route path="/login" element={<LoginScreen />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomeScreen />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <>
              <Navbar />
              <AdminDashboardScreen />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
