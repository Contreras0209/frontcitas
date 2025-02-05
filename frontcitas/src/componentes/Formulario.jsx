import React from 'react';
import "../estilos/Formulario.css";

const Formulario = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Formulario enviado');
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-container was-validated p-4 border rounded bg-light shadow">
      <div className="mb-3 mt-3">
        <label htmlFor="uname" className="form-label">ID:</label>
        <input type="text" className="form-control" id="uname" placeholder="Ingresar ID" name="uname" required />
        <div className="valid-feedback">Campo válido</div>
        <div className="invalid-feedback">Por favor, rellene este campo.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="pwd" className="form-label">CONTRASEÑA:</label>
        <input type="password" className="form-control" id="pwd" placeholder="Ingresar contraseña" name="pswd" required />
        <div className="valid-feedback">Campo válido</div>
        <div className="invalid-feedback">Por favor, rellene este campo.</div>
      </div>
      <div className="form-check mb-3">
        <input className="form-check-input" type="checkbox" id="myCheck" name="remember" required />
        <label className="form-check-label" htmlFor="myCheck">Aceptar condiciones</label>
        <div className="valid-feedback">Campo válido</div>
        <div className="invalid-feedback">Marque esta casilla de verificación para continuar.</div>
      </div>
      <button type="submit" className="btn btn-primary w-100">Aceptar</button>
    </form>
  );
};

export default Formulario;
