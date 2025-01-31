import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Formulario from '../componentes/formulario'; 
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-page">
      <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
        <h2 className="mb-4">Iniciar Sesión</h2>
        <Formulario />
        <Link to="/" className="mt-3">Volver a inicio</Link>
      </div>
    </div>
  );
};

export default Login;

