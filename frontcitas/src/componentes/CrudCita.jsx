import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const CrudReservaciones = () => {
    const [reservaciones, setReservaciones] = useState([]);
    const [nuevaReservacion, setNuevaReservacion] = useState({
        nombre_paciente: "",
        direccion_paciente: "",
        telefono_paciente: "",
        correo_electronico: "",
        motivo_consulta: ""
    });
    const [editando, setEditando] = useState(false);
    const [reservacionEditandoId, setReservacionEditandoId] = useState(null);

    useEffect(() => {
        obtenerReservaciones();
    }, []);

    const obtenerReservaciones = async () => {
        try {
            const response = await axios.get("http://localhost:8080/Nutricion/webresources/Reservaciones/mostrar");
            setReservaciones(response.data);
        } catch (error) {
            console.error("Error al obtener reservaciones:", error);
        }
    };

    const manejarAgregar = async () => {
        try {
            const params = new URLSearchParams();
            params.append("nombre_paciente", nuevaReservacion.nombre_paciente);
            params.append("direccion_paciente", nuevaReservacion.direccion_paciente);
            params.append("telefono_paciente", nuevaReservacion.telefono_paciente);
            params.append("correo_electronico", nuevaReservacion.correo_electronico);
            params.append("motivo_consulta", nuevaReservacion.motivo_consulta);

            await axios.post("http://localhost:8080/Nutricion/webresources/Reservaciones/guardar", params.toString(), {
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
            });

            alert("Reservación guardada correctamente.");
            obtenerReservaciones();
            setNuevaReservacion({ nombre_paciente: "", direccion_paciente: "", telefono_paciente: "", correo_electronico: "", motivo_consulta: "" });
        } catch (error) {
            alert("Error al guardar la reservación.");
        }
    };

    const manejarEditar = (reservacion) => {
        setEditando(true);
        setReservacionEditandoId(reservacion.id);
        setNuevaReservacion({ ...reservacion });
    };

    const manejarActualizar = async () => {
        try {
            const params = new URLSearchParams();
            params.append("id", reservacionEditandoId);
            params.append("nombre_paciente", nuevaReservacion.nombre_paciente);
            params.append("direccion_paciente", nuevaReservacion.direccion_paciente);
            params.append("telefono_paciente", nuevaReservacion.telefono_paciente);
            params.append("correo_electronico", nuevaReservacion.correo_electronico);
            params.append("motivo_consulta", nuevaReservacion.motivo_consulta);

            await axios.post("http://localhost:8080/Nutricion/webresources/Reservaciones/editar", params.toString(), {
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
            });

            alert("Reservación actualizada correctamente.");
            obtenerReservaciones();
            setEditando(false);
            setReservacionEditandoId(null);
            setNuevaReservacion({ nombre_paciente: "", direccion_paciente: "", telefono_paciente: "", correo_electronico: "", motivo_consulta: "" });
        } catch (error) {
            alert("Error al actualizar la reservación.");
        }
    };

    const manejarEliminar = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/Nutricion/webresources/Reservaciones/eliminar/${id}`);
            alert("Reservación eliminada correctamente.");
            obtenerReservaciones();
        } catch (error) {
            alert("Error al eliminar la reservación.");
        }
    };

    return (
        <div className="container">
            <h2>Gestión de Reservaciones</h2>
            <div>
                <input type="text" placeholder="Nombre del Paciente" value={nuevaReservacion.nombre_paciente} onChange={(e) => setNuevaReservacion({ ...nuevaReservacion, nombre_paciente: e.target.value })} />
                <input type="text" placeholder="Dirección" value={nuevaReservacion.direccion_paciente} onChange={(e) => setNuevaReservacion({ ...nuevaReservacion, direccion_paciente: e.target.value })} />
                <input type="text" placeholder="Teléfono" value={nuevaReservacion.telefono_paciente} onChange={(e) => setNuevaReservacion({ ...nuevaReservacion, telefono_paciente: e.target.value })} />
                <input type="email" placeholder="Correo Electrónico" value={nuevaReservacion.correo_electronico} onChange={(e) => setNuevaReservacion({ ...nuevaReservacion, correo_electronico: e.target.value })} />
                <input type="text" placeholder="Motivo de Consulta" value={nuevaReservacion.motivo_consulta} onChange={(e) => setNuevaReservacion({ ...nuevaReservacion, motivo_consulta: e.target.value })} />
                <button onClick={editando ? manejarActualizar : manejarAgregar}>{editando ? "Actualizar Reservación" : "Agregar Reservación"}</button>
                {editando && <button onClick={() => { setEditando(false); setReservacionEditandoId(null); setNuevaReservacion({ nombre_paciente: "", direccion_paciente: "", telefono_paciente: "", correo_electronico: "", motivo_consulta: "" }); }}>Cancelar Edición</button>}
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                        <th>Correo Electrónico</th>
                        <th>Motivo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {reservaciones.map((reservacion) => (
                        <tr key={reservacion.id}>
                            <td>{reservacion.nombre_paciente}</td>
                            <td>{reservacion.direccion_paciente}</td>
                            <td>{reservacion.telefono_paciente}</td>
                            <td>{reservacion.correo_electronico}</td>
                            <td>{reservacion.motivo_consulta}</td>
                            <td>
                                <button onClick={() => manejarEditar(reservacion)}>Editar</button>
                                <button onClick={() => manejarEliminar(reservacion.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CrudReservaciones;
