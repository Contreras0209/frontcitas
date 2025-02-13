import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './paginas/Home';
import Login from './paginas/Login';
import Citas from './paginas/Citas';
import Usuarios from './paginas/Usuarios';  // Página de usuarios
import CrudUsuario from './componentes/CrudUsuario';  // Componente CRUD
import Navbar from './componentes/Navbar';
import BarUsuarios from './componentes/BarUsuarios';

function AppContent() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/Usuarios' && <Navbar />}

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/citas" element={<Citas />} />

        {/* Ruta principal de Usuarios */}
        <Route path="/Usuarios" element={<Usuarios />}>
          {/* Ruta interna para mostrar el CRUD de usuarios */}
          <Route path="crud" element={<CrudUsuario />} />
        </Route>
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
