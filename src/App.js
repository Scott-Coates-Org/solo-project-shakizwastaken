import "./styles/app.css";

//screen imports
import HomeScreen from "./screens/Home";
import LoginScreen from "./screens/Login";
import AuthRoute from "./components/utils/PrivateRoute";

import { Routes, Route } from "react-router-dom";
import { useAuth } from "./features/login/hooks/useAuth";

import PortalContainer from "./features/portal/components/container/Container";
import PortalDashboard from "./features/portal/screens/dashboard/Dashbord";
import SchoolLeveling from "./features/portal/screens/school/leveling/Leveling";
import RoleAuthorization from "./components/utils/RoleAuthorization";

function App() {
  useAuth(); //call auth hook

  return (
    <div className="app_container">
      <Routes>
        {/* can be accessed by logged in users only */}
        <Route element={<AuthRoute />}>
          {/* render main container component */}
          <Route element={<PortalContainer />}>
            <Route path="/dashboard" element={<PortalDashboard />} />

            {/* school routes */}
            <Route
              path="/school/leveling"
              element={
                <RoleAuthorization allowedRoles={"MANAGER"}>
                  <SchoolLeveling />
                </RoleAuthorization>
              }
            />
          </Route>
        </Route>

        <Route path="/login" element={<LoginScreen />} />
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </div>
  );
}

export default App;
