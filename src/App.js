import "./styles/app.css";

//screen imports
import HomeScreen from "./screens/Home";
import LoginScreen from "./screens/Login";
import PrivateRoute from "./components/utils/PrivateRoute";
import AdminDashboardScreen from "./screens/admin/Dashboard";

import { Routes, Route } from "react-router-dom";

import User from "./firebase/controllers/users/user";
import Student from "./firebase/controllers/users/student";
import Class from "./firebase/controllers/classes/class";
import Instructor from "./firebase/controllers/users/instructor";

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
            <PrivateRoute>
              <AdminDashboardScreen />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
