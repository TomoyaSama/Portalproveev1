import React from "react";
//import 'react-bootstrap'
import '../styles/heade2.css'
import logo from '../images/iconpp.jpg'
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie'
import AuthService from "../../services/auth.services"
import EventBus from '../../cambios/common/EventBus'

import { useContext } from "react";
import AuthContext from "../../context/AuthProvider"
//import { useState } from 'react';

const Inicio =() => {
    
    const cookies = new Cookies()
    const { setAuth }= useContext(AuthContext)
    const navigate = useNavigate()

    const usr = cookies.get("user")
    const logout = async () => {
        setAuth({})
        AuthService.logOut()
        navigate('/')   
    }

    return(
        <div>
            <div className="Header">
                <div className="img"> <img name="imgini" id="imgini" className="imgini" src={logo}/></div>
                <p name="pindx" id="pindx" className="pindx"><Link to="/inicio">Proveedores</Link></p>
                <button className="sali" onClick={logout}>Salir</button>
            </div>
            <div className="content-1">
                <div className="row">
                    <div className="menu">
                        <ul className="lista">
                            <span className="span1"> Menu</span>
                            <li className="obj1"><Link to="/informacion">Informaci&oacute;n</Link></li>
                            <li className="obj1"><Link to="/consultaPago"> Consulta de pagos</Link></li>
                            <li className="obj1"><Link to="/ordenesCompra"> Ordenes de compra</Link></li>
                            <li className="obj1"><Link to="/infoFacturas"> Facturas</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="cuini">
                <p className="prraf"> Bienvenido <span className="ltsp">{usr} </span> al portal de Proveedores</p>
            </div>
        </div>
    )

}

export default Inicio