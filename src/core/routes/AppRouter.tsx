import { Navigate, Route, Routes } from "react-router-dom";
import { LoginView } from "../../auth/views/LoginView";
import { HomeViewJefe } from "../../jefe/views/HomeViewJefe";
import { NavbarJefe } from "../../components/Navbar-Jefe";

export const AppRouter = () => {
  //useSelector

  return (
    <>
      <NavbarJefe />
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route path="/home-jefe" element={<HomeViewJefe />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};
