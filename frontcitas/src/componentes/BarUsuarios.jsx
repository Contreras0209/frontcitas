import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';  // Importar Link

function BarUsuarios() {
  return (
    <Nav fill variant="tabs">
      <Nav.Item>
        <Nav.Link as={Link} to="/Usuarios/crud">Administrar Usuarios</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/Usuarios/otro">Otra Pestaña</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default BarUsuarios;