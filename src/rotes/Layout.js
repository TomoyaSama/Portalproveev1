
import { Outlet } from "react-router-dom";
import '../components/styles/layout.css'
import bckgnd from "../components/images/imghardl.webp";


const Layout= () =>{
    return(
        <div>
            <Outlet/>
        
        </div>
    )
}

export default Layout