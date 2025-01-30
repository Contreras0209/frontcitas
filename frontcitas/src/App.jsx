import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './paginas/Home';   // Importa el componente Home
import Login from './paginas/login'; // Importa el componente Login

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta raíz ("/") redirige automáticamente a /home */}
        <Route path="/" element={<Navigate to="/home" />} />
        
        {/* Ruta para el Home */}
        <Route path="/Home" element={<Home />} />
        
        {/* Ruta para el Login */}
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

