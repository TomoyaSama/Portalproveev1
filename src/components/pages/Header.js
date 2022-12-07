import React from "react";
import '../styles/header.css'
import icono from '../images/iconpp.jpg'


//import browserrouter
import { Link } from "react-router-dom";
class Header extends React.Component{

    render(){
        return(
            <div>
                <div id="Header" name="hader" class="header ">
                    <div class="img"> <img  className="imgini" src={icono} /></div>
                        <p name="pindx" id="pindx" className="pindx"><a href="/">Proveedores</a></p>
                    </div>

                    <div className="cntc">
                    <p className="txt1">Proveedores</p>
                    <br/>
                    <p className="txt2">Si a&uacute;n no cuenta con su acceso</p>
                    
                    <Link to="./solicitud"> Solicitela aqu&iacute;</Link>
                    </div>
            </div>
        )
    }

}

export default Header