import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { Register } from "./pages/auth/Register";
import { Login } from "./pages/auth/Login";
import { AppTheme } from "./theme/AppTheme";
import { AppLayout } from "./layouts/AppLayout";
import NotFound from "./pages/NotFound";
import { ROUTES_AVAILABLES } from "./constants/rutes";
import Patients from "./pages/JornalApp/Patients";
import Home from "./pages/JornalApp/Home";
import Works from "./pages/JornalApp/Works";
function App() {
  return (
    <AppTheme>
      <Routes>
        <Route
          path="/auth/*"
          element={
            <Routes>
              <Route path={ROUTES_AVAILABLES.LOGIN.PATH} element={<Login />} />
              <Route
                path={ROUTES_AVAILABLES.REGISTER.PATH}
                element={<Register />}
              />
              <Route
                path={ROUTES_AVAILABLES.RESET_PASSWORD.PATH}
                element={<Patients />}
              />
            </Routes>
          }
        ></Route>
        <Route
          path="/*"
          element={
            <AppLayout>
              <Routes>
                <Route path={ROUTES_AVAILABLES.HOME.PATH} element={<Home />} />

                <Route
                  path={ROUTES_AVAILABLES.SETTINGS.PATH}
                  element={<Patients />}
                />
                <Route
                  path={ROUTES_AVAILABLES.PROFILE.PATH}
                  element={<Patients />}
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
                  element={<Patients />}
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
                  element={<Patients />}
                />
                <Route
                  path={ROUTES_AVAILABLES.ESTATISTICS.PATH}
                  element={<Patients />}
                />
                <Route
                  path={ROUTES_AVAILABLES.CREATE_CLINICS.PATH}
                  element={<Patients />}
                />
                <Route
                  path={ROUTES_AVAILABLES.VIEW_CLINICS.PATH}
                  element={<Works />}
                />
                <Route
                  path={ROUTES_AVAILABLES.VIEW_CLINIC.PATH}
                  element={<Patients />}
                />
                <Route
                  path={ROUTES_AVAILABLES.VIEW_PATIENT_HISTORY.PATH}
                  element={<Patients />}
                />
                <Route path="/*" element={<Navigate to="/404" />} />
                <Route path="404" element={<NotFound />} />
              </Routes>
            </AppLayout>
          }
        />
      </Routes>
    </AppTheme>
  );
}

export default App;
