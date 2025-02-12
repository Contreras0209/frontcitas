import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const CrudCita = () => {
  const [citas, setCitas] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [newCita, setNewCita] = useState({ paciente: "", fecha: "", hora: "" });

  useEffect(() => {
    axios.get("http://localhost:8080/api/citas")
      .then(response => setCitas(response.data))
      .catch(error => console.error("Error fetching citas:", error));
  }, []);

  const handleAdd = () => {
    if (!newCita.paciente || !newCita.fecha || !newCita.hora) return;
    axios.post("http://localhost:8080/api/citas", newCita)
      .then(response => setCitas([...citas, response.data]))
      .catch(error => console.error("Error adding cita:", error));
    setNewCita({ paciente: "", fecha: "", hora: "" });
  };

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleSave = (id) => {
    axios.put(`http://localhost:8080/api/citas/${id}`, newCita)
      .then(() => {
        setCitas(citas.map(cita => (cita.id === id ? { ...cita, ...newCita } : cita)));
        setEditingId(null);
        setNewCita({ paciente: "", fecha: "", hora: "" });
      })
      .catch(error => console.error("Error updating cita:", error));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/citas/${id}`)
      .then(() => setCitas(citas.filter(cita => cita.id !== id)))
      .catch(error => console.error("Error deleting cita:", error));
  };

  return (
    <div className="container">
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-8">
              <h2>Gestión de <b>Citas</b></h2>
            </div>
            <div className="col-sm-4">
              <button className="btn btn-info add-new" onClick={handleAdd}>
                <i className="fa fa-plus"></i> Agregar Cita
              </button>
            </div>
          </div>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Paciente</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {citas.map((cita) => (
              <tr key={cita.id}>
                <td>
                  {editingId === cita.id ? (
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={cita.paciente}
                      onChange={(e) => setNewCita({ ...newCita, paciente: e.target.value })}
                    />
                  ) : (
                    cita.paciente
                  )}
                </td>
                <td>
                  {editingId === cita.id ? (
                    <input
                      type="date"
                      className="form-control"
                      defaultValue={cita.fecha}
                      onChange={(e) => setNewCita({ ...newCita, fecha: e.target.value })}
                    />
                  ) : (
                    cita.fecha
                  )}
                </td>
                <td>
                  {editingId === cita.id ? (
                    <input
                      type="time"
                      className="form-control"
                      defaultValue={cita.hora}
                      onChange={(e) => setNewCita({ ...newCita, hora: e.target.value })}
                    />
                  ) : (
                    cita.hora
                  )}
                </td>
                <td>
                  {editingId === cita.id ? (
                    <button className="btn btn-success" onClick={() => handleSave(cita.id)}>
                      <i className="material-icons">check</i>
                    </button>
                  ) : (
                    <button className="btn btn-warning" onClick={() => handleEdit(cita.id)}>
                      <i className="material-icons">edit</i>
                    </button>
                  )}
                  <button className="btn btn-danger" onClick={() => handleDelete(cita.id)}>
                    <i className="material-icons">delete</i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CrudCita;
