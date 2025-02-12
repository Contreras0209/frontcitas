import React from 'react';
import '../estilos/usuarios.css';  
import BarUsuarios from '../componentes/BarUsuarios';

const Usuarios = () => {
  return (
    <div className="usuarios-container">
      <h1>Página de Usuarios</h1>
      <BarUsuarios /> 
    </div>
  );
};

export default Usuarios;

