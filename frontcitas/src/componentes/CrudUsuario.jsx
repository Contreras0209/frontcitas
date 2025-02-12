import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const CrudUsuario = () => {
  const [employees, setEmployees] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [newEmployee, setNewEmployee] = useState({ name: "", department: "", phone: "" });

  useEffect(() => {
    axios.get("http://localhost:8080/api/employees")
      .then(response => setEmployees(response.data))
      .catch(error => console.error("Error fetching employees:", error));
  }, []);

  const handleAdd = () => {
    if (!newEmployee.name || !newEmployee.department || !newEmployee.phone) return;
    axios.post("http://localhost:8080/api/employees", newEmployee)
      .then(response => setEmployees([...employees, response.data]))
      .catch(error => console.error("Error adding employee:", error));
    setNewEmployee({ name: "", department: "", phone: "" });
  };

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleSave = (id) => {
    axios.put(`http://localhost:8080/api/employees/${id}`, newEmployee)
      .then(() => {
        setEmployees(employees.map(emp => (emp.id === id ? { ...emp, ...newEmployee } : emp)));
        setEditingId(null);
        setNewEmployee({ name: "", department: "", phone: "" });
      })
      .catch(error => console.error("Error updating employee:", error));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/employees/${id}`)
      .then(() => setEmployees(employees.filter(emp => emp.id !== id)))
      .catch(error => console.error("Error deleting employee:", error));
  };

  return (
    <div className="container">
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-8">
              <h2>Employee <b>Details</b></h2>
            </div>
            <div className="col-sm-4">
              <button className="btn btn-info add-new" onClick={handleAdd}>
                <i className="fa fa-plus"></i> Add New
              </button>
            </div>
          </div>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>
                  {editingId === emp.id ? (
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={emp.name}
                      onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
                    />
                  ) : (
                    emp.name
                  )}
                </td>
                <td>
                  {editingId === emp.id ? (
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={emp.department}
                      onChange={(e) => setNewEmployee({ ...newEmployee, department: e.target.value })}
                    />
                  ) : (
                    emp.department
                  )}
                </td>
                <td>
                  {editingId === emp.id ? (
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={emp.phone}
                      onChange={(e) => setNewEmployee({ ...newEmployee, phone: e.target.value })}
                    />
                  ) : (
                    emp.phone
                  )}
                </td>
                <td>
                  {editingId === emp.id ? (
                    <button className="btn btn-success" onClick={() => handleSave(emp.id)}>
                      <i className="material-icons">check</i>
                    </button>
                  ) : (
                    <button className="btn btn-warning" onClick={() => handleEdit(emp.id)}>
                      <i className="material-icons">edit</i>
                    </button>
                  )}
                  <button className="btn btn-danger" onClick={() => handleDelete(emp.id)}>
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

export default CrudUsuario;