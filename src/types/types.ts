export type TokenContextState = {
    token: string;
    updateToken: (newToken: string) => void;
};