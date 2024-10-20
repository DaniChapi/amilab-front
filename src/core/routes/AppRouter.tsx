import { Route, Routes } from "react-router-dom";
import { LoginView } from "../../auth/views/LoginView";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginView />} />
    </Routes>
  );
};
