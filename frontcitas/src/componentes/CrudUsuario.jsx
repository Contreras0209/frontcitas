import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const CrudUsuario = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [nuevoUsuario, setNuevoUsuario] = useState({
        nombre: "",
        direccion: "",
        correo_electronico: "",
        contrasena: "",
        rol_usuario: "",
        activo: true,
    });

    useEffect(() => {
        obtenerUsuarios();
    }, []);

    const obtenerUsuarios = async () => {
        try {
            const response = await axios.get("http://localhost:8080/Nutricion/webresources/Usuarios/mostrar");
            setUsuarios(response.data);
        } catch (error) {
            console.error("Error al obtener usuarios:", error);
        }
    };

    const manejarAgregar = async () => {
        try {
            await axios.post("http://localhost:8080/Nutricion/webresources/Usuarios/guardar", nuevoUsuario, {
                headers: { "Content-Type": "application/json" },
            });
            alert("Usuario guardado correctamente.");
            obtenerUsuarios();
            setNuevoUsuario({
                nombre: "",
                direccion: "",
                correo_electronico: "",
                contrasena: "",
                rol_usuario: "",
                activo: true,
            });
        } catch (error) {
            alert("Error al guardar el usuario.");
        }
    };

    return (
        <div className="container">
            <h2>Gestión de Usuarios</h2>
            <div>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={nuevoUsuario.nombre}
                    onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, nombre: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Dirección"
                    value={nuevoUsuario.direccion}
                    onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, direccion: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="Correo Electrónico"
                    value={nuevoUsuario.correo_electronico}
                    onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, correo_electronico: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={nuevoUsuario.contrasena}
                    onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, contrasena: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Rol"
                    value={nuevoUsuario.rol_usuario}
                    onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, rol_usuario: e.target.value })}
                />
                <button onClick={manejarAgregar}>Agregar Usuario</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Dirección</th>
                        <th>Correo Electrónico</th>
                        <th>Rol</th>
                        <th>Activo</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.direccion}</td>
                            <td>{usuario.correo_electronico}</td>
                            <td>{usuario.rol_usuario}</td>
                            <td>{usuario.activo ? "Activo" : "Inactivo"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CrudUsuario;