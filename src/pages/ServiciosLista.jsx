import React from 'react'
import { Link } from 'react-router-dom'
export default function ServiciosLista({servicios}) {
  return (
    <div>
        <h2>Lista de nuestros servicios</h2>
        <ul>
        {servicios.map((servicios) => (
          <li key={servicios.id}>
            <Link to={`/servicios/${servicios.id}`}>{servicios.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
