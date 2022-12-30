import axios from "axios"
import Cookies from "universal-cookie"

const cookies = new Cookies()
//mandar todo el proceso de logina esta pagina y dejar solo el form, logout y registro

class AuthService{
//metodo de logot
    logOut(){
        localStorage.removeItem("user")
        cookies.remove("id")
        cookies.remove("user")
        cookies.remove("userc")
        cookies.remove("emprs")
        cookies.remove("rlus")
        cookies.remove("rfus")
        cookies.remove("token")
        
    }

    getCurrentUser(){
        return JSON.parse(localStorage.getItem('user'))
    }


}
export default new AuthService()
