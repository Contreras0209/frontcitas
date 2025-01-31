import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './paginas/Home';
import Login from './paginas/login';
import Navbar from './componentes/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirige la ruta raíz "/" a "/home" */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Página de inicio con Navbar */}
        <Route path="/home" element={<Home />} />

        {/* Página de login (sin Navbar) */}
        <Route path="/login" element={<Login />} />

        {/* Páginas adicionales */}
        <Route path="/pagina1" element={<h1>Página 1 en construcción</h1>} />
        <Route path="/pagina2" element={<h1>Página 2 en construcción</h1>} />

        {/* Ruta para manejar páginas no encontradas */}
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
      </Routes>
    </Router>
  );
}

export default App;

