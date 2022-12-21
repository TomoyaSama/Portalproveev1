import React from "react";
import '../styles/solicitud.css'
import icono from '../images/iconpp.jpg'
import { useState } from "react";

//import 'react-bootstrap'
class Solicitud extends React.Component{
    
    state = {}
    
    
    handlesubmit= e =>{
        e.preventDefault()
        console.log(this.state)
    }
    handleChage = e => {
        //console.log( `${e.target.name}: ${e.target.value}`)
        this.setState({
            [e.target.nempresa]: e.target.value
        })
    }


    render(){
        return(
        <div>
                <div className="Header">
                    <div className="img"> <img  className="imgini" src={icono} /></div>
                    <p name="pindx" id="pindx" className="pindx"><a href="/">Proveedores</a></p>
                    <p className="pinci"><a href="/">Iniciar Sesion</a></p>
                </div>
       <div className="form">
        <form onSubmit={this.handlesubmit}>
            <table className="tabsol">
                <tbody>
                <tr><td colSpan="2" className="txt2">Ingrese los siguientes datos</td></tr>
                <tr><td name="txt" className="txt"> Nombre de la empresa: </td>
                <td><input name="nempresa" onChange={this.handleChage} value={this.state.nempresa} className="inptxt" type="text" placeholder="nombre de la empresa"/></td></tr>
                <tr>
                    <td><div name="txt" className="txt">Correo electr&oacute;nico: </div></td>
                    <td><input type="email" className="inptxt" name="correoe" onChange={this.handleChage} value={this.state.correoe} placeholder="Correo@example.com"/></td>
                </tr>
                <tr>
                    <td><div name="txt" className="txt">R.F.C.: </div></td>
                    <td><input type="text" className="inptxt" name="rfc" onChange={this.handleChage} value={this.state.rfc} placeholder="RFC"/></td>
                </tr>
                <tr>
                    <td><div name="txt" className="txt">Nombre de contacto: </div></td>
                    <td><input type="text" className="inptxt" name="nombrec" onChange={this.handleChage} value={this.state.nombrec} placeholder="Nombre"/></td>
                </tr>
        
                <tr><td className="tddd" colSpan="2"><input className="btnsb" type="submit" name="solicitar" value="Solicitar"/></td></tr>
                </tbody> </table>
            </form>
        </div>
</div>

        )
    }
}

export default Solicitud