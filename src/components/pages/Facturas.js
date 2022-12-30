import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider"
import '../styles/fact.css'
import logo from '../images/iconpp.jpg'

import Cookies from "universal-cookie";
const Fact =() =>{

    const cookies = new Cookies()
    const { setAuth }= useContext(AuthContext)
    
    const navigate = useNavigate()

    const logout = async () => {
        setAuth({})
        navigate('/')
       
    }
        return(
            <div>
                <div className="Header">
                    <div className="img"> <img name="imgini" id="imgini" className="imgini" src={logo}/></div>
                    <p name="pindx" id="pindx" className="pindx"><Link to="/inicio">Proveedores</Link></p>
                    <button className="sali" onClick={ logout }>Salir</button>
                </div>
                <div className="content-1">
                    <div className="row">
                        <div className="menu">
                            <ul className="lista">
                                <span className="span1"> Menu</span>
                                <li className="obj1">Informaci&oacute;n</li>
                                <li className="obj1"><Link to="/consultaPago"> Consulta de pagos</Link></li>
                                <li className="obj1"><Link to="/ordenesCompra"> Ordenes de compra</Link></li>
                                <li className="obj1"><Link to="/infoFacturas"> Facturas</Link></li>
                            </ul>
                    </div>
                </div>
            </div>
            <div className="cuerp">
                <table className="tbinp">
                    <tbody>
                    <tr>
                    <td colSpan="2"><p className="prr">Informaci&oacute;n de Facturas</p></td>
                    </tr>
                    <tr><td className="ifp">Nombre: </td><td className="ifp">{cookies.get('user')}</td> </tr>
                    <tr><td className="ifp">Empresa:</td><td className="ifp">{cookies.get('emprs')}</td></tr>
                    <tr><td className="ifp">RFC:</td><td className="ifp">{cookies.get('rfus')}</td></tr>
                    </tbody></table>
            </div>
        </div>
        )
    

}
export default Fact