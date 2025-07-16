// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import BarraDePesquisa from './componentes/BarraDePesquisa';
import Filtros from './componentes/Filtros';
import Ordenacao from './componentes/Ordenacao';
import Sidebar from './componentes/Sidebar';

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className='container'>
      <Sidebar />
      <div>
        <BarraDePesquisa />
        <Filtros />
        <Ordenacao />
      </div>
    </div>
  );
};

export default App;
