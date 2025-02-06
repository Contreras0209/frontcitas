import React from "react";
import Navbar from "../componentes/Navbar";
import Carrusel from "../componentes/Carrusel";
import { Link } from "react-router-dom";
import Tarjeta from "../componentes/Tarjeta";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <h1>Clinica de nutricion S.A de C.V</h1>
        {/* Carrusel centrado */}
        <div className="carousel-container">
          <Carrusel />
        </div>

        {/* Contenedor de tarjetas */}
        <div className="tarjetas-container">
          <Tarjeta imagen="/imagenes/tar1.jpg" titulo="Primera visita Nutrición" texto="Esto incluye una evaluación detallada de tus hábitos alimenticios, tu estilo de vida, y cualquier condición médica que pueda influir en tu nutrición" />
          <Tarjeta imagen="/imagenes/tar2.jpg" titulo="Control de peso (prevención y seguimiento)" texto="El control de peso implica mantener un peso saludable. Esto involucra ejercicio regular y una dieta sana. Un programa de pérdida y control de peso analiza su ingesta nutricional y los factores de riesgo médico asociados con el peso." />
          <Tarjeta imagen="/imagenes/tar3.jpg" titulo="Visitas sucesivas Nutrición" texto="En las consultas sucesivas se procede a identificar los obstáculos que dificultan la adhesión a la dieta y valorar la motivación, así como a evaluar los cambios operados en la composición corporal y el patrón alimentario, con objeto de alcanzar un mayor grado de personalización de la dieta que permita su implementación a largo plazo." />
        </div>
      </div>
    </div>
  );
};

export default Home;


