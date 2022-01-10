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

const TokenProvider: FC = ({ children }) => {


    // global states
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [token, setToken] = useState<string>(contextDefaultValues.token)
    const [user, setUser] = useState(contextDefaultValues.user)

    const navigate = useNavigate();


    // initialRender: validUserToken ? authorize : don't authorize
    useEffect(() => {
        const init = async () => {
            const userToken = localStorage.getItem('token')
            userToken ? updateAuth() : setIsAuth(false)
        }

        init();
    }, [])
    console.log(isAuth);



    // upon receiving a token, update global state & 
    const updateToken = (newToken: string) => {
        setToken(newToken)
        console.log(newToken);
        localStorage.setItem('token', newToken)
        updateAuth()
        userData(newToken)
        // navigate('/user-profile')
    };


    const updateAuth = () => {
        setIsAuth(true)
    }



    const updateUser = (newUser: {}) => { setUser(newUser) };
    // userProfile req
    const userData = async (input: string) => {
        try {
            console.log('try code running');
            const result = await axiosInstance.get('/api/account/user-profile', {
                headers: {
                    'Authorization': `Bearer ${input}`
                }
            })
            if (result.status === 200) {
                console.log(result);
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

export default TokenProvider;

