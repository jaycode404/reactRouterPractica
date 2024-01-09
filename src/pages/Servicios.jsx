import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Servicios() {
  return (
    <div>
      <h1>Servicios</h1>
      <nav className="flex gap-[2rem]">
        <Link to="/servicios">Inicio</Link>
        <Link to="/servicios/lista">Lista</Link>
        <Link to="/servicios/garantia">Garantia</Link>
        <Link to="/servicios/politica">Politica</Link>
      </nav>
      <Outlet />
    </div>
  );
}
