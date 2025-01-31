import React from 'react';
import Navbar from '../componentes/Navbar';
import Carrusel from '../componentes/Carrusel';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div data-bs-theme="dark">
      <Navbar />
      <div className="main-container">
        <h1>Bienvenido a la Página de Inicio</h1>
        <div className="carousel-container">
          <Carrusel />
        </div>
        <Link to="/login" className="mt-3 d-block">Ir al Login</Link>
      </div>
    </div>
  );
};

export default Home;
