import { Navigate, Route, Routes } from "react-router-dom";
import { LoginView } from "../../auth/views/LoginView";
import { HomeViewJefe } from "../../jefe/views/HomeViewJefe";
import { Navbar } from "../../components/Navbar";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route path="/home-jefe" element={<HomeViewJefe />} />
        <Route path="*" element={<Navigate to="/home-jefe" />} />
      </Routes>
    </>
  );
};
