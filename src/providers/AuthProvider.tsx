import React, { useState, createContext, FC, useEffect } from 'react';
import { TokenContextState } from 'src/types/types';
import { useNavigate } from 'react-router-dom';
import axiosInstance from 'src/utils/axios';

const contextDefaultValues: TokenContextState = {
    user: {
        about: "",
        address: "",
        city: "",
        country: "",
        displayName: "",
        email: "",
        id: "",
    },
    token: "",
    isAuth: false,
    updateUser: () => { },
    updateToken: () => { },
    updateAuth: () => { }
};

export const TokenContext = createContext<TokenContextState>(
    contextDefaultValues
);

const AuthProvider: FC = ({ children }) => {


    // global states
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [token, setToken] = useState<string>(contextDefaultValues.token)
    const [user, setUser] = useState(contextDefaultValues.user)

    // helper methods
    const updateAuth = () => setIsAuth(true)
    const navigate = useNavigate();
    const updateUser = (newUser: {}) => { setUser(newUser) };


    // initialRender: validUserToken ? authorize : don't authorize
    useEffect(() => {
        const init = async () => {
            const userToken = localStorage.getItem('token')
            userToken ? updateAuth() : setIsAuth(false)
        }

        init();
    }, [])



    // upon receiving a token, update global state and send user data request
    const updateToken = (newToken: string) => {
        setToken(newToken)
        localStorage.setItem('token', newToken)
        updateAuth()
        fetchUserData(newToken)
    };


    // fetch user profile data
    const fetchUserData = async (input: string) => {
        try {
            const result = await axiosInstance.get('/api/account/user-profile', {
                headers: {
                    'Authorization': `Bearer ${input}`
                }
            })
            if (result.status === 200) {
                updateUser(result.data.user)
                navigate('/user-profile')
            }
        } catch (e) {
            alert('there is something wrong')
        }
    }



    return (
        <TokenContext.Provider value={{ user, isAuth, token, updateToken, updateAuth, updateUser }}>
            {children}
        </TokenContext.Provider>
    )

};

export default AuthProvider;

