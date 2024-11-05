import { Navigate, Route, Routes } from "react-router-dom";
import { LoginView } from "../../auth/views/LoginView";
import { JefeRouter } from "./JefeRouter";
import { EmpleadoRouter } from "./EmpleadoRouter";
export const AppRouter = () => {
  //useSelector

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route path="/jefe/*" element={<JefeRouter />} />
        <Route path="/vendedor/*" element={<EmpleadoRouter />} />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};
