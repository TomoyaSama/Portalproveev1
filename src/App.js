import './App.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

//pages
import Login from './components/pages/Login';
import Solicitud from './components/pages/solicitudacceso';
import Home from './components/pages/inicio'
import Info from './components/pages/info'
import Consulta from './components/pages/conslpagos';
//import Log2 from './components/pages/Loginb';
//import Layout from './rotes/Layout'

import RequireAuth from './components/pages/RequireAuth'
import PrivateRoute from './context/PrivateRoute'

import Unauthorized from './components/pages/Unauthorized';
import { getRoles } from '@testing-library/react';
//import ROLES from './helpers/roles';
const ROLES = {
  'user': "USUS",
  'Admin': "ADAD",
  }

// poner el dom correcto desde otras paginas 
    
      
/*
  <Route path="/solicitud" element={<Solicitud/>}></Route>
      <Route path='/inicio' element={<Home/>}></Route>
      <Route path='/informacion' element={<Info/>}></Route>
      <Route path='/ConsultaPago' element={<Consulta/>}></Route>*/


//roles



function App() {
  return (
    <Routes>
      {/*<Route path="/" element={<Layout/>}>*/}
         {/* public routes */}
        <Route path="/" element={<Login/>}/>
        <Route path="/solicitud" element={<Solicitud/>}/>
        <Route path='/sinautorizado' element={<Unauthorized/>}/>
        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
        {/*<PrivateRoute hasRole={ROLES.Admin} >*/}
          <Route path='/inicio' element={<Home/>}/>
          <Route path='/informacion' element={<Info/>}/>
          <Route path='/ConsultaPago' element={<Consulta/>}/>
        {/*</PrivateRoute>*/}
      </Route>
    </Routes>
      
    
  )
}

export default App;
