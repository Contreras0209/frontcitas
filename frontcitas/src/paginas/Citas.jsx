import Reservacion from "../componentes/Reservacion";

function Citas() {
  return (
    <div className="citas-container">
      <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
        <h1 className="mb-4">Registrar citas</h1>
      <Reservacion />
      </div>
    </div>
  );
}

export default Citas;

