import './App.css';
//pages
import Login from './components/pages/Login';
import Solicitud from './components/pages/solicitudacceso';
import Home from './components/pages/inicio'
import Info from './components/pages/info'
import Consulta from './components/pages/conslpagos';
import Unauthorized from './components/pages/Unauthorized';
import OrdenesCompra from './components/pages/OrdenesCom'
import Facturas from './components/pages/Facturas'

//import Log2 from './components/pages/Loginb';
//import Layout from './rotes/Layout'

import RequireAuth from './components/pages/RequireAuth'
import { Routes, Route} from 'react-router-dom';
//import PrivateRoute from './context/PrivateRoute'

//import ROLES from './helpers/roles';
const ROLES = {
  'user': "USUS",
  'Admin': "ADAD",
  }
function App() {
  
  return (
    <Routes>
      {/*<Route path="/" element={<Layout/>}>*/}
         {/* public routes */}
        <Route path="/" element={<Login/>}/>
        <Route path="/solicitud" element={<Solicitud/>}/>
        <Route path='/sinautorizado' element={<Unauthorized/>}/>
        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.user]} />}>
        
        {/*<PrivateRoute hasRole={ROLES.Admin} >*/}
          <Route path='/inicio' element={<Home/>}/>
          <Route path='/informacion' element={<Info/>}/>
          <Route path='/ConsultaPago' element={<Consulta/>}/>
          <Route path='/ordenesCompra' element={<OrdenesCompra/>}/>
          <Route path='/infoFacturas' element={<Facturas/>}/>
        {/*</PrivateRoute>*/}
      </Route>
    </Routes>
      
    
  )
}

/*
<Route element={<RequireAuth allowedRoles={[ROLES].user}/>}>
        <Route path='/a' element={<a/>} />
      </Route>
*/
export default App;
