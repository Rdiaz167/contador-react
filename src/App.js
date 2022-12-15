import './App.css';
import './estilos/boton.css'
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import { useState } from 'react';

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClicks(0)
  };

  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <Contador numeroClicks={numClicks} />
        <Boton
          texto='Clic'
          botonDeClick={true}
          manejarClick={manejarClick} />
        <Boton
          texto='Reiniciar'
          botonDeClick={false}
          manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
