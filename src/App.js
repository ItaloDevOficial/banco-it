import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Header from './Componentes/Header';
import SobreCartao from './Componentes/SobreCartao';
import Celular from './Componentes/Celular';
import Rodape from './Componentes/Rodape';
import Home from './Componentes/Home';
import Cartoes from './Componentes/Cartoes';
import AbraConta from './Componentes/AbraConta';
// import SobreNos from './Componentes/SobreNos';
import NavBar from './Componentes/NavBar';
import SobreOBanco from './Componentes/SobreOBanco';


function App() {
  return (

    <div>
      <Router>

        {/* <Header /> */}
        <NavBar />
        <Routes>

          <Route exact path='/' element={<Home />} />
          <Route path='/Cartoes' element={<Cartoes />} />
          <Route path='/SobreOBanco' element={<SobreOBanco />} />
          <Route path='/AbraConta' element={<AbraConta />} />

        </Routes>

        <SobreCartao />
        <Celular />
        <Rodape />

      </Router>

    </div>
  );
}

export default App;
