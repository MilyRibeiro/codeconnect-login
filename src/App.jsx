// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import BarraDePesquisa from './componentes/BarraDePesquisa';
import Sidebar from './componentes/Sidebar';

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className='container'>
      <Sidebar />
      <BarraDePesquisa />
    </div>
  );
};

export default App;
