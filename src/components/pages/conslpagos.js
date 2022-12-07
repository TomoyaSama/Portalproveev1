import React from "react";
import logo from '../images/iconpp.jpg'



class Consulta extends React.Component{
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
                                <li className="obj1"><a href="/informacion">Informaci&oacute;n</a></li>
                                <li className="obj1"> Consulta de pagos</li>
                            </ul>
                    </div>
                </div>
            </div>
            <div className="cuerp">
                <p className="prr">Consulta Pagos</p>
            </div>
        </div>
        )
    }
}
export default Consulta