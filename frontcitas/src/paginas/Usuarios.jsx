import React from 'react';
import { Outlet } from 'react-router-dom';  // Importar Outlet
import BarUsuarios from "../componentes/BarUsuarios";  // Importar BarUsuarios

function Usuarios() {
  return (
    <div>
      <h2>Gestión de Usuarios</h2>
      <BarUsuarios />  {/* Barra con las pestañas */}
      <Outlet />  {/* Aquí se renderizarán las rutas anidadas, como CrudUsuario */}
    </div>
  );
}

export default Usuarios;