// App.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Formulario from './componentes/formulario';

function App() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <h2 className="mb-4">Login</h2>
      <Formulario />
    </div>
  );
}

export default App;


