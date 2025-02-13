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
    const [editando, setEditando] = useState(false); // Para saber si estamos editando
    const [usuarioEditandoId, setUsuarioEditandoId] = useState(null); // ID del usuario en edición

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
            const params = new URLSearchParams();
            params.append("nombre", nuevoUsuario.nombre);
            params.append("direccion", nuevoUsuario.direccion);
            params.append("correo_electronico", nuevoUsuario.correo_electronico);
            params.append("contrasena", nuevoUsuario.contrasena);
            params.append("rol_usuario", nuevoUsuario.rol_usuario);
            params.append("activo", nuevoUsuario.activo ? 1 : 0); // Asegúrate de que el valor sea 1 o 0
    
            await axios.post(
                "http://localhost:8080/Nutricion/webresources/Usuarios/guardar",
                params.toString(), // Convierte a formato x-www-form-urlencoded
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            );
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

    const manejarEditar = (usuario) => {
        setEditando(true);
        setUsuarioEditandoId(usuario.id);
        setNuevoUsuario({
            nombre: usuario.nombre,
            direccion: usuario.direccion,
            correo_electronico: usuario.correo_electronico,
            contrasena: usuario.contrasena,
            rol_usuario: usuario.rol_usuario,
            activo: usuario.activo,
        });
    };

    const manejarActualizar = async () => {
        try {
            const params = new URLSearchParams();
            params.append("id", usuarioEditandoId); // Debe ser "id", NO "id_usuario"
            params.append("nombre", nuevoUsuario.nombre);
            params.append("direccion", nuevoUsuario.direccion);
            params.append("correo_electronico", nuevoUsuario.correo_electronico);
            params.append("contrasena", nuevoUsuario.contrasena);
            params.append("rol_usuario", nuevoUsuario.rol_usuario);
    
            await axios.post(
                `http://localhost:8080/Nutricion/webresources/Usuarios/editar`,
                params.toString(),
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            );
            alert("Usuario actualizado correctamente.");
            obtenerUsuarios();
            setEditando(false);
            setUsuarioEditandoId(null);
            setNuevoUsuario({
                nombre: "",
                direccion: "",
                correo_electronico: "",
                contrasena: "",
                rol_usuario: "",
                activo: true,
            });
        } catch (error) {
            console.error("Error al actualizar el usuario:", error.response ? error.response.data : error);
            alert("Error al actualizar el usuario.");
        }
    };
    
    

    const manejarEliminar = async (id) => {
        try {
            await axios.get(`http://localhost:8080/Nutricion/webresources/Usuarios/eliminar?id=${id}`);
            alert("Usuario desactivado correctamente.");
            obtenerUsuarios();
        } catch (error) {
            alert("Error al desactivar el usuario.");
        }
    };

    const manejarActivoChange = async (id, activo) => {
        try {
            const endpoint = activo ? "activar" : "eliminar";
            await axios.get(`http://localhost:8080/Nutricion/webresources/Usuarios/${endpoint}?id=${id}`);
            alert(`Usuario ${activo ? "activado" : "desactivado"} correctamente.`);
            obtenerUsuarios();
        } catch (error) {
            alert("Error al cambiar el estado del usuario.");
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
                <button onClick={editando ? manejarActualizar : manejarAgregar}>
                    {editando ? "Actualizar Usuario" : "Agregar Usuario"}
                </button>
                {editando && (
                    <button onClick={() => {
                        setEditando(false);
                        setUsuarioEditandoId(null);
                        setNuevoUsuario({
                            nombre: "",
                            direccion: "",
                            correo_electronico: "",
                            contrasena: "",
                            rol_usuario: "",
                            activo: true,
                        });
                    }}>
                        Cancelar Edición
                    </button>
                )}
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Dirección</th>
                        <th>Correo Electrónico</th>
                        <th>Rol</th>
                        <th>Activo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.direccion}</td>
                            <td>{usuario.correo_electronico}</td>
                            <td>{usuario.rol_usuario}</td>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={usuario.activo}
                                    onChange={(e) => manejarActivoChange(usuario.id, e.target.checked)}
                                />
                            </td>
                            <td>
                                <button onClick={() => manejarEditar(usuario)}>Editar</button>
                                <button onClick={() => manejarEliminar(usuario.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CrudUsuario;