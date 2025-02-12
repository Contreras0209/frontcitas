import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './paginas/Home';
import Login from './paginas/Login';
import Citas from './paginas/Citas';
import Usuarios from './paginas/Usuarios';
import Navbar from './componentes/Navbar';

function AppContent() {
  const location = useLocation();

  return (
    <div>
      {/* Solo renderiza el Navbar si NO estamos en la página de usuarios */}
      {location.pathname !== '/Usuarios' && <Navbar />}

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/citas" element={<Citas />} />
        <Route path="/Usuarios" element={<Usuarios />} /> {/* Página de usuarios */}
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