import './App.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

//pages
import Login from './components/pages/Login';
import Solicitud from './components/pages/solicitudacceso';
import Home from './components/pages/inicio'
import Info from './components/pages/info'
import Consulta from './components/pages/conslpagos';
import Log2 from './components/pages/Loginb';
import Layout from './rotes/Layout'

import RequireAuth from './components/pages/RequireAuth'


// poner el dom correcto desde otras paginas 
    
      
/*
  <Route path="/solicitud" element={<Solicitud/>}></Route>
      <Route path='/inicio' element={<Home/>}></Route>
      <Route path='/informacion' element={<Info/>}></Route>
      <Route path='/ConsultaPago' element={<Consulta/>}></Route>*/


function App() {
  return (
    <Routes>
      {/*<Route path="/" element={<Layout/>}>*/}
         {/* public routes */}
        <Route path="/" element={<Login/>}/>
        <Route path="/solicitud" element={<Solicitud/>}/>
        {/* we want to protect these routes */}
        <Route element={<RequireAuth/>}>
          <Route path='/inicio' element={<Home/>}/>
          <Route path='/informacion' element={<Info/>}/>
          <Route path='/ConsultaPago' element={<Consulta/>}/>
        </Route>
      {/*</Route>*/}
    </Routes>
      
    
  )
}

export default App;
