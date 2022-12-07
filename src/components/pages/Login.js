import React from "react";
import '../styles/login.css'
import 'react-bootstrap'
import icono from '../images/iconpp.jpg'

//import css
import '../styles/header.css' 
 import { Outlet, Link } from "react-router-dom";

class Login extends React.Component{
    render(){
        
        return( 
            <div>
            <div id="Header" name="hader" class="header ">
                    <div class="img"> <img  className="imgini" src={icono} /></div>
                    <p name="pindx" id="pindx" className="pindx"><a href="/">Proveedores</a></p>
            </div>

            <div className="cntc">
                <p className="txt1">!Proveedores¡</p>
                <br/>
                <p className="pb1">Si a&uacute;n no cuenta con su acceso</p>                    
                <p className="pb1"><Link to="./solicitud"> Solicitela aqu&iacute;</Link></p>
            </div>
                    <Outlet/>
            <div  className="col-6  content">
            <p class="pb">Bienvenido a la secci&oacute;n de Proveedores</p>
            <p class="pb">Es necesario que se identifique antes de hacer uso de esta aplicaci&oacute;n</p>
            <hr/>
            <label name="txt" for="user"> Usuario <strong>*</strong> </label>
                <input id="user" name="user" type="text" placeholder="nombre de usuario"/>

               <label  for="pass" name="txt">Contraseña <strong>*</strong></label>
                <input  id="pass" type="password" name="pass" placeholder="Contraseña"/>
            
          <input type="submit" name="iniciarsessn" value="Iniciar Sesi&oacute;n"/>

            </div>
            </div>
        )
    }
}

export default Login