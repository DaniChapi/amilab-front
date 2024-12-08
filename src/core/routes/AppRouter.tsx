import { Navigate, Route, Routes } from "react-router-dom";
import { LoginView } from "../../auth/views/LoginView";
import { JefeRouter } from "./JefeRouter";
import { EmpleadoRouter } from "./EmpleadoRouter";
import { ConfirmacionExitosa } from "../../auth/views/ConfirmacionExitosa";
export const AppRouter = () => {
  //useSelector

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route path="/jefe/*" element={<JefeRouter />} />
        <Route path="/vendedor/*" element={<EmpleadoRouter />} />
        <Route path="/confirmacion-exitosa" element={<ConfirmacionExitosa />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};
