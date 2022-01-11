import { Navigate } from 'react-router-dom'
import useAuth from 'src/hooks/useAuth';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const { isAuth } = useAuth();
    console.log(isAuth);

    return isAuth ? children : <Navigate to="/login" />
}

export default PrivateRoute;