import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();


  if (location.pathname === '/usuarios') {
    return null;
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        
        <button className="navbar-brand btn btn-link" onClick={() => window.location.href = '/'}>Logo</button>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Acceso</Link>
            </li>
            <li className="nav-item">
              <Link to="/citas" className="nav-link">Citas</Link>
            </li>
          </ul>
          
          <form className="d-flex">
            <input className="form-control me-2" type="text" placeholder="Search" />
            <button className="btn btn-primary" type="button">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
