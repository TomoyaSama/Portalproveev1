import React from "react";
import logo from '../images/iconpp.jpg'
import '../styles/cnstpgs.css'
import { Link } from 'react-router-dom'


class Consulta extends React.Component{
    render(){
        return(
            <div>
                <div className="Header">
                    <div className="img"> <img name="imgini" id="imgini" className="imgini" src={logo}/></div>
                    <p name="pindx" id="pindx" class="pindx"><Link to="/inicio">Proveedores</Link></p>
                    <span className="sali"><a href="/">Salir</a></span>
                </div>
                <div className="content-1">
                    <div className="row">
                        <div className="menu">
                            <ul className="lista">
                                <span className="span1"> Menu</span>
                                <li className="obj1"><Link to="/informacion">Informaci&oacute;n</Link></li>
                                <li className="obj1"> Consulta de pagos</li>
                                <li className="obj1"><Link to="/ordenesCompra"> Ordenes de compra</Link></li>
                                <li className="obj1"><Link to="/infoFacturas"> Facturas</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="cuerp-cp">
                <p className="prr">Consulta Pagos</p>
            </div>
        </div>
        )
    }
}
export default Consulta