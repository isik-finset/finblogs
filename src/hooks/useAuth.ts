import { TokenContext } from "src/providers";
import { useContext } from "react";

export default function useAuth () {

    const { user, isAuth, updateUser, updateToken } = useContext(TokenContext)

    return {
        user,
        isAuth,
        updateUser,
        updateToken
    }
}
