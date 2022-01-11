import { TokenContext } from "src/providers";
import { useContext } from "react";

export default function useAuth () {

    const { user, token, isAuth, updateUser, updateAuth, updateToken } = useContext(TokenContext)

    return {
        user,
        token,
        isAuth,
        updateAuth,
        updateUser,
        updateToken
    }
}
