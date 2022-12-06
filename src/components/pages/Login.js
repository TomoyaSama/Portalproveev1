import React from "react";
import '../styles/login.css'
import 'react-bootstrap'


class Login extends React.Component{
    render(){
        return( <div  className="col-6  content">
            <p class="pb">Bienvenido a la secci&oacute;n de Proveedores</p>
            <p class="pb">Es necesario que se identifique antes de hacer uso de esta aplicaci&oacute;n</p>
            <hr/>
            <label name="txt" for="user"> Usuario <strong>*</strong> </label>
                <input id="user" name="user" type="text" placeholder="nombre de usuario"/>

               <label  for="pass" name="txt">Contraseña <strong>*</strong></label>
                <input  id="pass" type="password" name="pass" placeholder="Contraseña"/>
            
          <input type="submit" name="iniciarsessn" value="Iniciar Sesi&oacute;n"/>

            </div>
        )
    }
}

export default Login