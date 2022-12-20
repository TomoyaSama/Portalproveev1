import React from "react";
import { useRef, useState, useEffect } from "react";
import '../styles/login.css'
import '../styles/header.css'
//import 'react-bootstrap'
import icono from '../images/iconpp.jpg'
//import { useState } from "react";
import axios from "axios"; 
import { Link,useLocation, useNavigate } from 'react-router-dom'
import useAuth from "../../hooks/UseAuth";
//import md5 from 'md5'
import Cookies from "universal-cookie";
//import css
const baseUrl = "http://localhost:4000/api/login";
 const cookies = new Cookies()



const Login =()=> {

    const { setAuth } = useAuth();

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/inicio"

    const userRef = useRef();
    const errRef =useRef();

   const[errMsg, setErrMsg] = useState('');

    useEffect(()=>{
        setErrMsg('');
    },[])
    
    const [body, setBody] = useState({username:'', password: ''})
    
//metodo para enviar datos a la appi 

   const handlesubmit= e =>{
    e.preventDefault()
    
}
    const onSubmit = ()=>{

        const response = axios.post(baseUrl,body)
        .then(({data})=>{
            console.log(data)
            
            const idus = data?.emp
            const nous = data?.username
            const usus = data?.user
            const emus = data?.empus
            const role = data?.rol

            
            setAuth({ idus, nous, usus,emus, role });
                //cookies.set('', ,{path:'/'})
                navigate(from, {replace: true});
                //window.location.href="/inicio"
            } )
        .catch(({response})=>{ 
            console.log(response?.data)
            var errs= response?.data
            setErrMsg( errs)
        })

        
    }
    

    //parte de captura de datos de input
    const inputChange=({target})=>{
        const {name, value}= target
        setBody({
            ...body, [name]: value
        })
    }
 
        return(
            <section>
            <div>
            <div id="Header" name="hader" className="header ">
                    <div className="img"> <img  className="imgini" src={icono} /></div>
                    <p name="pindx" id="pindx" className="pindx"><a href="/">Proveedores</a></p>
            </div>

            <div className="cntc">
                <p className="txt1">!Proveedores¡</p>
                <br/>
                <p className="pb1">Si a&uacute;n no cuenta con su acceso</p>                    
                <p className="pb1"><Link to="/solicitud"> Solicitela aqu&iacute;</Link></p>
            </div>
                    
            <div  className="col-6  content-log">
                <p className="pb">Bienvenido a la secci&oacute;n de Proveedores</p>
                <p className="pb">Es necesario que se identifique antes de hacer uso de esta aplicaci&oacute;n</p>
                <hr/>
                <form onSubmit={handlesubmit}>
                    <table className="tblini"><tbody>

                        <tr><td>
                            <label  name="txt" 
                                    className="lbl" 
                                    htmlFor="username"> Usuario <strong>*</strong> 
                            </label></td>
                        <td>
                            <input 
                                id="user" 
                                className="inptxt1" 
                                name="username" 
                                type="text" 
                                placeholder="nombre de usuario"
                                value={body.username}
                                onChange={inputChange}
                                required
                                />
                        </td></tr>
                        <tr><td>
                            <label className="lbl" 
                                    htmlFor="pass" 
                                    name="txt">Contraseña <strong>*</strong>
                            </label></td>
                        <td>
                            <input 
                                className="inppss"
                                id="pass" 
                                type="password" 
                                name="password" 
                                placeholder="Contraseña"
                                value={body.password}
                                onChange={inputChange}
                                required
                                />
                        </td></tr>
                        <tr><td colSpan="2">
                            <button className="sbmt" 
                                    onClick={onSubmit}  
                                    name="iniciarsessn" >Iniciar sesion</button></td></tr>
                                    <tr><td colSpan={2}><p ref={errRef} className={errMsg ? "errmsg": "offscreen"} aria-live="assertive">{errMsg}</p></td></tr>
                        </tbody></table>
                </form>
            </div>
        </div>
        </section>
        )
        
}


export default Login