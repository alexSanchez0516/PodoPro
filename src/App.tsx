import "./App.css";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { Register } from "./pages/auth/Register";
import { Login } from "./pages/auth/Login";
import { AppTheme } from "./theme/AppTheme";
import { AppLayout } from "./layouts/AppLayout";
import NotFound from "./pages/NotFound";
import { ROUTES_AVAILABLES } from "./constants/rutes";
import Patients from "./pages/app/Patients/Patients";
import Appointments from "./pages/app/Appointments/Appointments";
import Statistics from "./pages/app/Statistics/Statistics";
import ControlPanel from "./pages/app/ControlPanel/ControlPanel";
import UserProfile from "./pages/app/Profile/Profile";
import Planing from "./pages/app/Planing/Planing";
import { useUserStore } from "./zustand/useUserStore";
function App() {
  const { user } = useUserStore();
  return (
    <AppTheme>
      <Routes>
        <Route
          path="/auth/*"
          element={
            <Routes>
              <Route
                path={ROUTES_AVAILABLES.LOGIN.PATH}
                element={
                  !user?.isAuth ? (
                    <Login />
                  ) : (
                    <Navigate to={ROUTES_AVAILABLES.HOME.PATH} />
                  )
                }
              />
              <Route
                path={ROUTES_AVAILABLES.REGISTER.PATH}
                element={
                  !user?.isAuth ? (
                    <Register />
                  ) : (
                    <Navigate to={ROUTES_AVAILABLES.HOME.PATH} />
                  )
                }
              />
              <Route
                path={ROUTES_AVAILABLES.RESET_PASSWORD.PATH}
                element={
                  !user?.isAuth ? (
                    <Patients />
                  ) : (
                    <Navigate to={ROUTES_AVAILABLES.HOME.PATH} />
                  )
                }
              />
            </Routes>
          }
        ></Route>
        <Route
          path="/*"
          element={
            user?.isAuth ? (
              <AppLayout>
                <Routes>
                  <Route path="" element={<Planing />} />

                  <Route
                    path={ROUTES_AVAILABLES.HOME.PATH}
                    element={<Planing />}
                  />

                  <Route
                    path={ROUTES_AVAILABLES.DASHBOARD.PATH}
                    element={<ControlPanel />}
                  />
                  <Route
                    path={ROUTES_AVAILABLES.PROFILE.PATH}
                    element={<UserProfile />}
                  />
                  <Route
                    path={ROUTES_AVAILABLES.CREATE_PATIENT.PATH}
                    element={<Patients />}
                  />
                  <Route
                    path={ROUTES_AVAILABLES.VIEW_PATIENTS.PATH}
                    element={<Patients />}
                  />
                  <Route
                    path={ROUTES_AVAILABLES.VIEW_PATIENT.PATH}
                    element={<Patients />}
                  />
                  <Route
                    path={ROUTES_AVAILABLES.CREATE_APPOINTMENT.PATH}
                    element={<Patients />}
                  />
                  <Route
                    path={ROUTES_AVAILABLES.VIEW_APPOINTMENTS.PATH}
                    element={<Appointments />}
                  />
                  <Route
                    path={ROUTES_AVAILABLES.VIEW_APPOINTMENT.PATH}
                    element={<Patients />}
                  />
                  <Route
                    path={ROUTES_AVAILABLES.BILLING.PATH}
                    element={<Patients />}
                  />
                  <Route
                    path={ROUTES_AVAILABLES.DASHBOARD.PATH}
                    element={<></>}
                  />

                  <Route
                    path={ROUTES_AVAILABLES.ESTATISTICS.PATH}
                    element={<Statistics />}
                  />

                  <Route
                    path={ROUTES_AVAILABLES.CREATE_CLINICS.PATH}
                    element={<Patients />}
                  />

                  <Route
                    path={ROUTES_AVAILABLES.VIEW_CLINIC.PATH}
                    element={<Patients />}
                  />
                  <Route
                    path={ROUTES_AVAILABLES.VIEW_PATIENT_HISTORY.PATH}
                    element={<Patients />}
                  />
                  <Route
                    path={ROUTES_AVAILABLES.VIEW_PLANING.PATH}
                    element={<Planing />}
                  />
                  <Route path="/*" element={<Navigate to="/404" />} />
                  <Route path="404" element={<NotFound />} />
                </Routes>
              </AppLayout>
            ) : (
              <Navigate to={"/auth" + ROUTES_AVAILABLES.LOGIN.PATH} />
            )
          }
        />
      </Routes>
    </AppTheme>
  );
}

export default App;
