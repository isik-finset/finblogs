import { TokenContext } from "src/providers";
import { useContext } from "react";

export default function useAuth () {

    const { user, isAuth, updateUser, logIn, logOut } = useContext(TokenContext)

    return {
        user,
        isAuth,
        updateUser,
        logIn, 
        logOut
    }
}
