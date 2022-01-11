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
    isAuth: false,
    updateUser: () => { },
    updateToken: () => { },
};

export const TokenContext = createContext<TokenContextState>(
    contextDefaultValues
);

const AuthProvider: FC = ({ children }) => {


    // global states
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [user, setUser] = useState(contextDefaultValues.user)
    console.log(isAuth);

    // helper methods
    const updateUser = (newUser: {}) => { setUser(newUser) };


    // initialRender: validUserToken ? authorize : don't authorize
    useEffect(() => {
        const init = async () => {
            const userToken = localStorage.getItem('token')
            userToken ? fetchUserData(userToken) : setIsAuth(false)
        }

        init();
    }, [])



    // upon receiving a token, update global state and send user data request
    const updateToken = (newToken: string) => {
        localStorage.setItem('token', newToken)
        fetchUserData(newToken)
    };


    // fetch user profile data
    const fetchUserData = async (input: string) => {
        setIsAuth(true)
        try {
            const result = await axiosInstance.get('/api/account/user-profile', {
                headers: {
                    'Authorization': `Bearer ${input}`
                }
            })
            if (result.status === 200) {
                updateUser(result.data.user)
                // navigate('/user-profile') // think of a way to force the navigation from inside the Guards
            }
        } catch (e) {
            alert('there is something wrong')
        }
    }


    return (
        <TokenContext.Provider value={{ user, isAuth, updateToken, updateUser }}>
            {children}
        </TokenContext.Provider>
    )

};

export default AuthProvider;

