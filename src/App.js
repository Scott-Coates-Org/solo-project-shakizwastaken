import "./styles/app.css";

import { Routes, Route } from "react-router-dom";
import { useAuth } from "./features/login/hooks/useAuth";

//
import LoginScreen from "./screens/Login";
import PageNotFound from "./screens/PageNotFound";
import AuthRoute from "./components/utils/PrivateRoute";
import PortalContainer from "./features/portal/components/ui/container/Container";
import PortalDashboard from "./features/portal/screens/dashboard/Dashbord";
import RoleAuthorization from "./components/utils/RoleAuthorization";
import SchoolLeveling from "./features/portal/screens/school/manager/leveling/Leveling";
import SchoolClasses from "./features/portal/screens/school/manager/classes/Classes";
import ComingSoonScreen from "./screens/ComingSoonScreen";
import SchoolViewUsersScreen from "./features/portal/screens/school/manager/users/viewUsers/ViewUsers";
import SchoolCreateUserScreen from "./features/portal/screens/school/manager/users/createUser/CreateUser";
import SchoolEditClassSchedule from "./features/portal/screens/school/schedule/editSchedule/EditSchedule";
import SchoolCurrentSchedule from "./features/portal/screens/school/schedule/viewSchedule/ViewCurrentSchedule";

function App() {
  useAuth(); //call auth hook

  return (
    <div className="app_container">
      <Routes>
        {/* can be accessed by logged in users only */}
        <Route element={<AuthRoute />}>
          {/* portal routes */}
          <Route element={<PortalContainer />}>
            {/* main dashboard */}
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
            {/* school class routes */}

            {/* manager view classes page */}
            <Route
              path="/school/viewClasses"
              element={
                <RoleAuthorization allowedRoles={"MANAGER"}>
                  <SchoolClasses />
                </RoleAuthorization>
              }
            />

            {/* class routes */}

            {/* class schedule */}

            <Route
              path="/school/schedule/me"
              element={<SchoolCurrentSchedule />}
            />

            <Route
              path="/school/class/id/:id/schedule/edit"
              element={<SchoolEditClassSchedule />}
            />

            {/* end of school class routes */}
            <Route
              path="/school/viewUsers"
              element={
                <RoleAuthorization allowedRoles={["MANAGER"]}>
                  <SchoolViewUsersScreen />
                </RoleAuthorization>
              }
            />

            <Route
              path="/school/user/create"
              element={
                <RoleAuthorization allowedRoles={["MANAGER"]}>
                  <SchoolCreateUserScreen />
                </RoleAuthorization>
              }
            />

            {/* users routes */}
            <Route path="/user/me/messages" element={<ComingSoonScreen />} />
          </Route>
        </Route>

        <Route path="/" element={<LoginScreen />} />
        <Route path="/login" element={<LoginScreen />} />

        {/* <Route path="/" element={<HomeScreen />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
