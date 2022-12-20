import { useLocation, Navigate, Outlet } from "react-router-dom";

import useAuth from "../../hooks/UseAuth";

const RequireAuth = ({ allowedRoles })=>{
    const { auth } = useAuth();
    const location = useLocation();
    console.log(auth.role)
    return (

        auth?.role?.cache.find(role => allowedRoles?.includes(role))
            ? <Outlet/>
            : auth.usus
                ? <Navigate to="/sinautorizado" state={{from: location}} replace />
                : <Navigate to="/" state={{ from: location }} replace />
    );
}

export default RequireAuth