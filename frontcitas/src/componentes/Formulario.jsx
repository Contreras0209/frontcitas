import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Para redirigir después del login
import "../estilos/Formulario.css";

const Formulario = () => {
  const [formData, setFormData] = useState({ uname: "", pswd: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook para redirigir

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
  
    const formDataEncoded = new URLSearchParams();
    formDataEncoded.append("nombre", formData.uname);
    formDataEncoded.append("contrasena", formData.pswd);
  
    try {
      const response = await axios.post(
        "http://localhost:8080/Nutricion/webresources/Login/usuarios",
        formDataEncoded,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
  
      if (response.status === 200 && response.data) {
        alert("✅ Autenticación exitosa");
        navigate("/Usuarios");
      } else {
        alert("❌ Usuario o contraseña incorrectos.");
      }
    } catch (error) {
      if (error.response && (error.response.status === 401 || error.response.status === 404)) {
        alert("❌ Usuario o contraseña incorrectos.");
      } else {
        alert("⚠️ Error al conectar con el servidor.");
      }
      console.error("Error en la autenticación:", error);
    }
  };
  
  
  

  return (
    <form onSubmit={handleSubmit} className="formulario-container was-validated p-4 border rounded bg-light shadow">
      <div className="mb-3 mt-3">
        <label htmlFor="uname" className="form-label">ID:</label>
        <input 
          type="text" 
          className="form-control" 
          id="uname" 
          placeholder="Ingresar ID" 
          name="uname" 
          value={formData.uname} 
          onChange={handleChange} 
          required 
        />
        <div className="valid-feedback">Campo válido</div>
        <div className="invalid-feedback">Por favor, rellene este campo.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="pwd" className="form-label">CONTRASEÑA:</label>
        <input 
          type="password" 
          className="form-control" 
          id="pwd" 
          placeholder="Ingresar contraseña" 
          name="pswd" 
          value={formData.pswd} 
          onChange={handleChange} 
          required 
        />
        <div className="valid-feedback">Campo válido</div>
        <div className="invalid-feedback">Por favor, rellene este campo.</div>
      </div>
      <div className="form-check mb-3">
        <input className="form-check-input" type="checkbox" id="myCheck" name="remember" required />
        <label className="form-check-label" htmlFor="myCheck">Aceptar condiciones</label>
        <div className="valid-feedback">Campo válido</div>
        <div className="invalid-feedback">Marque esta casilla de verificación para continuar.</div>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      <button type="submit" className="btn btn-primary w-100">Aceptar</button>
    </form>
  );
};

export default Formulario;