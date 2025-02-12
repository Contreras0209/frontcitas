import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import nut1 from '../imagenes/nut1.jpeg';
import nut2 from '../imagenes/nut2.jpeg';
import nut3 from '../imagenes/nut3.jpg';

const Carrusel = () => {
  return (
    <div className="container mt-4"> 
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={nut1} alt="Nutricion1" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={nut2} alt="Nutricion2" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={nut3} alt="Nutricion3" className="d-block w-100" />
          </div>
        </div>
        
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
};

export default Carrusel;
