import {useNavigate, Route} from 'react-router-dom'

import useAuth from '../hooks/UseAuth'


export default function PrivateRoute({ hasRole: role, ...rest}){
    const{ auth } = useAuth()
    const navigate = useNavigate()

    if(role && auth?.role !== role ) return navigate("/");

    if(!auth) return navigate("/login")

    return(
        <Route{...rest}/>
    )
}