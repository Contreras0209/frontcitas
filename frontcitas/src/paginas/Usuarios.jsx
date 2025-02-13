import React from 'react';
import { Outlet } from 'react-router-dom';  // Importar Outlet
import BarUsuarios from "../componentes/BarUsuarios";  // Importar BarUsuarios

function Usuarios() {
  return (
    <div>
      <h1>Bienvenido administrador</h1>
      <BarUsuarios />  {/* Barra con las pestañas */}
      <Outlet />  {/* Aquí se renderizarán las rutas anidadas, como CrudUsuario */}
    </div>
  );
}

export default Usuarios;