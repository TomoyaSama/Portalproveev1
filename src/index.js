import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';

//pages
import Login from './components/pages/Login';
import Solicitud from './components/pages/solicitudacceso';
import Home from './components/pages/inicio'
import Info from './components/pages/info'
import Consulta from './components/pages/conslpagos';

//import Header2 from './components/pages/Header2';
//importtar componnete app para paginacion


import reportWebVitals from './reportWebVitals';

//paginaciones

import { BrowserRouter, Routes, Route} from 'react-router-dom';


//import 'https://fonts.googleapis.com/css2?family=Mukta:wght@200&display=swap'
// poner el dom correcto desde otras paginas 

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/solicitud" element={<Solicitud/>}></Route>
      <Route path='/inicio' element={<Home/>}></Route>
      <Route path='/informacion' element={<Info/>}></Route>
      <Route path='/ConsultaPago' element={<Consulta/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

//dom con app paginacion 


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
