import React from "react";
import '../styles/solicitud.css'
import icono from '../images/iconpp.jpg'
//import 'react-bootstrap'

class Solicitud extends React.Component{
    render(){
        return(
        <div>
                <div className="Header">
                    <div class="img"> <img  className="imgini" src={icono} /></div>
                    <p name="pindx" id="pindx" className="pindx"><a href="/">Proveedores</a></p>
                </div>
       <div className="form">
            <table>
                <tr><td colspan="2" className="txt2">Ingrese los siguientes datos</td></tr>
                <tr><td name="txt" className="txt"> Nombre de la empresa: </td><td><input name="nempresa" type="text" placeholder="nombre de usuario"/></td></tr>
                <tr>
                    <td><div name="txt" className="txt">Correo electr&oacute;nico: </div></td>
                    <td><input type="text" name="correoe" placeholder="Correo"/></td>
                </tr>
                <tr>
                    <td><div name="txt" className="txt">R.F.C.: </div></td>
                    <td><input type="text" name="correoe" placeholder="RFC"/></td>
                </tr>
                <tr>
                    <td><div name="txt" className="txt">Nombre de contacto: </div></td>
                    <td><input type="text" name="nombrec" placeholder="Nombre"/></td>
                </tr>
        
                <tr><td colspan="2"><input type="submit" name="solicitar" value="Solicitar"/></td></tr>
            </table>
        </div>
</div>

        )
    }
}

export default Solicitud