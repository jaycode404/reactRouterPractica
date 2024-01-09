import React from "react";
import { Link } from "react-router-dom";

export default function Productos({productos}) {
  

  console.log(productos);

  return (
    <>
      <h1>Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <Link to={`/productos/${producto.id}`}>{producto.nombre}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
