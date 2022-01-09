import React, { useState, createContext, FC, useEffect } from 'react';
import { TokenContextState } from 'src/types/types';

const contextDefaultValues: TokenContextState = {
    token: "",
    updateToken: () => { },
    // login: (params: Record<string, string>) => void

};

export const TokenContext = createContext<TokenContextState>(
    contextDefaultValues
);

const TokenProvider: FC = ({ children }) => {
    const [token, setToken] = useState<string>(contextDefaultValues.token)


    // user
    const [isInit, setIsInit] = useState<boolean>(false);
    const updateToken = (newToken: string) => setToken(newToken);


    // Todo by Monday
    // async function init() {

    //     // check localStorage
    //     // isValidToken check

    //     // request

    //     // handle logic

    //     // update state

    // }
    const init = async () => {
        const userToken = localStorage.getItem('isInit')

        if (userToken) {
            setIsInit(true);
        } else {
            setIsInit(false)
        }
    }

    // async function login() {
    //     // login
    // }

    useEffect(() => {
        init();
    }, [])
    console.log(isInit);

    // Todo by Monday
    // return (
    //     <TokenContext.Provider value={{ login: () => { }, isAuth: false }} >
    //         {children}
    //     </TokenContext.Provider>
    // )
    return (
        <TokenContext.Provider value={{ token, updateToken }}>
            {children}
        </TokenContext.Provider>
    )

};

export default TokenProvider;

