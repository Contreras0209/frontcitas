import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../estilos/Reservacion.css'; 


function Reservacion() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div className="reservacion-container">
        <h2>Bienvenido favor de llenar todos los campos</h2> {/* Título agregado para mayor claridad */}
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            {/* Nombre */}
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Nombre</Form.Label>
              <Form.Control required type="text" placeholder="Nombre" />
              <Form.Control.Feedback type="invalid">Campo obligatorio.</Form.Control.Feedback>
            </Form.Group>

            {/* Apellido Paterno */}
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Apellido Paterno</Form.Label>
              <Form.Control required type="text" placeholder="Apellido Paterno" />
              <Form.Control.Feedback type="invalid">Campo obligatorio.</Form.Control.Feedback>
            </Form.Group>

            {/* Apellido Materno */}
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Apellido Materno</Form.Label>
              <Form.Control required type="text" placeholder="Apellido Materno" />
              <Form.Control.Feedback type="invalid">Campo obligatorio.</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            {/* Correo Electrónico */}
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control required type="email" placeholder="Correo Electrónico" />
              <Form.Control.Feedback type="invalid">Ingresa un correo electrónico válido.</Form.Control.Feedback>
            </Form.Group>

            {/* Teléfono */}
            <Form.Group as={Col} md="6" controlId="validationCustom05">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control required type="tel" placeholder="Teléfono" />
              <Form.Control.Feedback type="invalid">Ingresa un número de teléfono válido.</Form.Control.Feedback>
            </Form.Group>
          </Row>

          {/* Aceptar términos y condiciones */}
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Aceptar términos y condiciones"
              feedback="Debes aceptar antes de enviar."
              feedbackType="invalid"
            />
          </Form.Group>

          {/* Botón para enviar */}
          <Button type="submit">Agendar cita</Button>
        </Form>
    </div>
  );
}

export default Reservacion;

