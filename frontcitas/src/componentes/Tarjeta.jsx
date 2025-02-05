import React from "react";

const Tarjeta = ({ imagen, titulo, texto }) => {
  return (
    <div className="card" style={{ width: "300px", borderRadius: "10px", overflow: "hidden" }}>
      <img className="card-img-top" src={imagen} alt="Card image" style={{ objectFit: "cover", height: "200px" }} />
      <div className="card-body">
        <h4 className="card-title">{titulo}</h4>
        <p className="card-text">{texto}</p>
        <a href="/citas" className="btn btn-primary">Reservar Cita</a>
      </div>
    </div>
  );
};

export default Tarjeta;

