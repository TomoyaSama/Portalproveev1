import React from "react";
import '../styles/header.css'
import icono from '../images/iconpp.jpg'
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
                    <a href="SolictdAccss.html"><p className="sas">Solicitela aqu&iacute;</p></a>
                    </div>
            </div>
        )
    }

}

export default Header