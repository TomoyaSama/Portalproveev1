import React from "react";
import 'react-bootstrap'
import '../styles/heade2.css'
import logo from '../images/iconpp.jpg'
//import { useState } from 'react';
class Inicio extends React.Component{
 
render(){

    return(
        <div>
            <div className="Header">
                <div className="img"> <img name="imgini" id="imgini" className="imgini" src={logo}/></div>
                <p name="pindx" id="pindx" className="pindx"><a href="/inicio">Proveedores</a></p>
                <span className="sali" onClick={localStorage.clear()}><a href="/">Salir</a></span>
            </div>
            <div className="content-1">
                <div className="row">
                    <div className="menu">
                        <ul className="lista">
                            <span className="span1"> Menu</span>
                            <li className="obj1"><a href="/informacion">Informaci&oacute;n</a></li>
                            <li className="obj1"><a href="/consultaPago"> Consulta de pagos</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="cuini">
                <p className="prraf"> Bienvenido al portal de Proveedores</p>
            </div>
        </div>
    )
}
}

export default Inicio