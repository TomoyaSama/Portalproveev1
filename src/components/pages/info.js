import React from "react";
import '../styles/login.css'
import '../styles/inform.css'

import logo from '../images/iconpp.jpg'


class Info extends React.Component{
    render(){
        return(
            <div>
                <div className="Header">
                    <div className="img"> <img name="imgini" id="imgini" className="imgini" src={logo}/></div>
                    <p name="pindx" id="pindx" class="pindx"><a href="/inicio">Proveedores</a></p>
                    <span className="sali"><a href="/">Salir</a></span>
                </div>
                <div className="content-1">
                    <div className="row">
                        <div className="menu">
                            <ul className="lista">
                                <span className="span1"> Menu</span>
                                <li className="obj1">Informaci&oacute;n</li>
                                <li className="obj1"><a href="/consultaPago"> Consulta de pagos</a></li>
                            </ul>
                    </div>
                </div>
            </div>
            <div className="cuerp">
                <table className="tbinp"><tr>
                    <td colspan="2"><p className="prr">Informaci&oacute;n del proveedor</p></td>
                    </tr>
                    <tr><td>Nombre: </td><td>Ariel Loranca</td> </tr>
                    <tr><td>Empresa:</td><td>TIAmerica</td></tr>
                    <tr><td>RFC:</td><td>LOAA90088</td></tr>
                </table>
            </div>
        </div>
        )
    }

}

export default Info 