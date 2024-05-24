import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/LoginPage";
import { SiGedinMain } from "../modules/SiGedin/SiGedinMain";
import { useContext } from "react";
import { AuthUserContext } from "../context/AuthUser";

export const AppRouter = () => {
  const { isLogged } = useContext(AuthUserContext);

  const pathGoToDefault = !isLogged ? "/auth/login" : "/gedin/permisos/home";

  return (
    <Routes>
      {isLogged ? (
        <Route path="/gedin/permisos/home" element={<SiGedinMain />} />
      ) : (
        <Route path="/auth/login" element={<LoginPage />} />
      )}

      <Route path="*" element={<Navigate to={pathGoToDefault} />} />
    </Routes>
  );
};
