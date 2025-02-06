import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './paginas/Home';
import Login from './paginas/Login';
import Citas from './paginas/Citas'; 
import Navbar from './componentes/Navbar';

function App() {
  return (
    <Router>
      {/* Navbar está fuera de Routes, así que se muestra en todas las páginas */}
      <Navbar />
      <Routes>
        {/* Redirige la ruta raíz "/" a "/home" */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Página de inicio */}
        <Route path="/home" element={<Home />} />

        {/* Página de login */}
        <Route path="/login" element={<Login />} />

        {/* Página de citas */}
        <Route path="/citas" element={<Citas />} />
      </Routes>
    </Router>
  );
}

export default App;


