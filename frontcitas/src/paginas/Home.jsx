import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container text-center">
      <h1>Bienvenido a la Página de Inicio</h1>
      <Link to="/login" className="mt-3">Ir al Login</Link>
    </div>
  );
};

export default Home;
