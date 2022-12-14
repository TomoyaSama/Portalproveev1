/**Login funcionando*/


import React from "react";
import '../styles/login.css'
import '../styles/header.css'
//import 'react-bootstrap'
import icono from '../images/iconpp.jpg'
import { useState } from "react";
import axios from "axios"; 
import { useNavigate } from 'react-router'




//import css

 import { Outlet, Link, Redirect } from "react-router-dom";

const Login=()=>{
   
   /* const navigate = useNavigate();
    
    const [body, setBody]  = useState({username:'', password:''})
    const inputChange=({target}) =>{
        const{name, value} = target
        setBody({
            ...body,
            [name]: value
        })
    }
    const onSubmit=()=>{
        /*axios.post('http://localhost:4000/api/login', body)
        .then(({data})=>{
                localStorage.setItem('auth','"yes"')
                //this.props.history.push('/inicio')
                //history.push('/login')
              //  navigate('/inicio')
            }).catch(({response})=>{
                console.log(response)
            })
        }
    */
        return( 
            <div>
            <div id="Header" name="hader" class="header ">
                    <div class="img"> <img  className="imgini" src={icono} /></div>
                    <p name="pindx" id="pindx" className="pindx"><a href="/">Proveedores</a></p>
            </div>

            <div className="cntc">
                <p className="txt1">!Proveedores¡</p>
                <br/>
                <p className="pb1">Si a&uacute;n no cuenta con su acceso</p>                    
                <p className="pb1"><Link to="./solicitud"> Solicitela aqu&iacute;</Link></p>
            </div>
                    <Outlet/>
            <div  className="col-6  content-log">
                <p class="pb">Bienvenido a la secci&oacute;n de Proveedores</p>
                <p class="pb">Es necesario que se identifique antes de hacer uso de esta aplicaci&oacute;n</p>
                <hr/>
                <form>
                    <table className="tblini">

                        <tr><td><label name="txt" className="lbl" for="user"> Usuario <strong>*</strong> </label></td>
                        <td><input id="user" className="inptxt1" name="username" type="text" placeholder="nombre de usuario"/></td></tr>
                        <tr> <td><label className="lbl" for="pass" name="txt">Contraseña <strong>*</strong></label></td>
                        <td><input className="inppss"  id="pass" type="password" name="password" placeholder="Contraseña"/></td></tr>
                        <tr><td colspan="2"><input className="sbmt" name="iniciarsessn" value="Iniciar Sesi&oacute;n"/></td></tr>
                    </table>
                </form>
            </div>
        </div>
        )
    }


export default Login