import React, { useState, createContext, FC } from 'react';
import { TokenContextState } from 'src/types/types';

const contextDefaultValues: TokenContextState = {
    token: "",
    updateToken: () => { }

};

export const TokenContext = createContext<TokenContextState>(
    contextDefaultValues
);

const TokenProvider: FC = ({ children }) => {
    const [token, setToken] = useState<string>(contextDefaultValues.token)

    const updateToken = (newToken: string) => setToken(newToken);

    return (
        <TokenContext.Provider value={{ token, updateToken }} >
            {children}
        </TokenContext.Provider>
    )

};

export default TokenProvider;

