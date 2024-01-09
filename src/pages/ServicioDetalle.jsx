import React from "react";
import { useParams } from "react-router-dom";

export default function ServicioDetalle({ servicios }) {
  const { id } = useParams();

  const servicio = servicios.find((servicio) => servicio.id.toString() === id);

  return (
    <>
      <h1>Detalle del servicio</h1>
      <h2>{servicio.nombre}</h2>
      <h3>{servicio.id}</h3>
      <h4>{servicio.precio}</h4>
    </>
  );
}
