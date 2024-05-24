import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/LoginPage";
import { useContext } from "react";
import { AuthUserContext } from "../context/AuthUser";
import { SecondRoutes } from "./SecondRoutes";

export const AppRouter = () => {
  const { isLogged } = useContext(AuthUserContext);

  return (
    <Routes>
      {isLogged ? (
        <Route path="/*" element={<SecondRoutes />} />
      ) : (
        <Route path="/auth/login" element={<LoginPage />} />
      )}

      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
