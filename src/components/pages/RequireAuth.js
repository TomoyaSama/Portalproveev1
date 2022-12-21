import { useLocation, Navigate, Outlet } from "react-router-dom";

import useAuth from "../../hooks/UseAuth";

const RequireAuth = ({ allowedRoles })=>{
    const { auth } = useAuth();
    const location = useLocation();
    

    return (
        allowedRoles.find(role => auth.roles.includes(role))
        //auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet/>
            : auth?.user
                ? <Navigate to="/sinautorizado" state={{from: location}} replace />
                : <Navigate to="/" state={{ from: location }} replace />
    );
}

export default RequireAuth