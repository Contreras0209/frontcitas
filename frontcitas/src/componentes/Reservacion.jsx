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
      <h3>Bienvenido, favor de llenar todos los campos</h3>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
        
          <Form.Group as={Col} md="6" controlId="nombrePaciente">
            <Form.Label>Nombre del Paciente</Form.Label>
            <Form.Control required type="text" placeholder="Nombre" />
            <Form.Control.Feedback type="invalid">Campo obligatorio.</Form.Control.Feedback>
          </Form.Group>
          
      
          <Form.Group as={Col} md="6" controlId="correoElectronico">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control required type="email" placeholder="Correo Electrónico" />
            <Form.Control.Feedback type="invalid">Ingresa un correo electrónico válido.</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
      
          <Form.Group as={Col} md="6" controlId="telefonoPaciente">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control required type="tel" placeholder="Teléfono" />
            <Form.Control.Feedback type="invalid">Ingresa un número de teléfono válido.</Form.Control.Feedback>
          </Form.Group>

 
          <Form.Group as={Col} md="6" controlId="direccionPaciente">
            <Form.Label>Dirección</Form.Label>
            <Form.Control required type="text" placeholder="Dirección" />
            <Form.Control.Feedback type="invalid">Campo obligatorio.</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="motivoConsulta">
          <Form.Label>Motivo de Consulta</Form.Label>
          <select class="form-select">
            <option>Seleccione una opcion...</option>
            <option>Primera visita Nutrición</option>
            <option>Control de peso (prevención y seguimiento)</option>
            <option>Visitas sucesivas Nutrición</option>
          </select>
          <Form.Control.Feedback type="invalid">Campo obligatorio.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Aceptar términos y condiciones"
            feedback="Debes aceptar antes de enviar."
            feedbackType="invalid"
          />
        </Form.Group>

        <Button type="submit">Agendar cita</Button>
      </Form>
    </div>
  );
}

export default Reservacion;
