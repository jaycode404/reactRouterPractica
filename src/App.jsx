import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Acerca from "./pages/Acerca";
import Header from "./components/Header";
import Error404 from "./components/Error404";
import Productos from "./pages/Productos";
import ProductoDetalle from "./pages/ProductoDetalle";
import Servicios from "./pages/Servicios";
import ServiciosPolitica from "./pages/ServiciosPolitica";
import ServiciosLista from "./pages/ServiciosLista";
import ServiciosHome from "./pages/ServiciosHome";
import ServiciosGarantia from "./pages/ServiciosGarantia";
import ServicioDetalle from "./pages/ServicioDetalle";

function App() {
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Producto 1", precio: 20.99 },
    { id: 2, nombre: "Producto 2", precio: 15.49 },
    { id: 3, nombre: "Producto 3", precio: 25.99 },
    { id: 4, nombre: "Producto 4", precio: 30.0 },
    { id: 5, nombre: "Producto 5", precio: 18 },
  ]);

  const [servicios, setservicios] = useState([
    { id: 1, nombre: "Servicio 1", precio: 20.99 },
    { id: 2, nombre: "Servicio 2", precio: 15.49 },
    { id: 3, nombre: "Servicio 3", precio: 25.99 },
    { id: 4, nombre: "Servicio 4", precio: 30.0 },
    { id: 5, nombre: "Servicio 5", precio: 18 },
  ]);

  return (
    <>
      <Router>
        <div className="mt-5">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/about" element={<Navigate to="/acerca" />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route
            path="/productos"
            element={<Productos productos={productos} />}
          />
          <Route
            path="/productos/:id"
            element={<ProductoDetalle productos={productos} />}
          />
          <Route path="/servicios" element={<Servicios />}>
            <Route index element={<ServiciosHome />} />

            <Route
              path="lista"
              element={<ServiciosLista servicios={servicios} />}
            />

            <Route path="garantia" element={<ServiciosGarantia />} />

            <Route path="politica" element={<ServiciosPolitica />} />
            <Route path="lista" element={<ServiciosLista />} />
            
            <Route
              path=":id"
              element={
                <>
                  <ServiciosLista servicios={servicios} />
                  <ServicioDetalle servicios={servicios} />
                </>
              }
            />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
