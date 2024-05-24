import { Navigate, Route, Routes } from "react-router-dom";
import {
  Permisos,
  Incapacidades,
  Incidentes,
  MejoraContinua,
  Parametros,
  SiGedinMain,
  Vacaciones,
} from "../modules";
import { Sidebar } from "../modules/SiGedin/SideBar";

export const SecondRoutes = () => {
  return (
    <div className="flex">
      <Sidebar />

      <Routes>
        <Route path="/gedin/" element={<SiGedinMain />} />
        <Route path="/gedin/permisos" element={<Permisos />} />
        <Route path="/gedin/vacaciones" element={<Vacaciones />} />
        <Route path="/gedin/incidentes" element={<Incidentes />} />
        <Route path="/gedin/mejora-continua" element={<MejoraContinua />} />
        <Route path="/gedin/parametros" element={<Parametros />} />
        <Route path="/gedin/incapacidades" element={<Incapacidades />} />

        <Route path="/*" element={<Navigate to="/gedin/" />} />
      </Routes>
    </div>
  );
};
