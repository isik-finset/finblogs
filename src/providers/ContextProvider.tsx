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
    // const [isInit, setIsInit] = useState<boolean>(false);
    const updateToken = (newToken: string) => setToken(newToken);

    async function init() {

        // check localStorage
        // isValidToken check

        // request

        // handle logic

        // update state

    }

    async function login() {
        // login
    }

    useEffect(() => {
        init();
    }, [])


    return (
        <TokenContext.Provider value={{ login: () => { }, isAuth: false }} >
            {children}
        </TokenContext.Provider>
    )

};

export default TokenProvider;

