import { useContext } from "react";
import { AuthContext } from "./AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {

    const { user, loader } = useContext(AuthContext)
    const location=useLocation()

    if (loader) {
        return <progress className="progress w-56"></progress>
    }
    else if (user) {
        return children;
    }
    else {
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
};

export default PrivateRoutes;