export type TokenContextState = {
    user: {
        about?: string
        address?: string
        city?: string
        country?: string
        displayName?: string
        email?: string
        id?: string
    };
    updateUser: (name: string) => void;
    updateToken: (newToken: string) => void;
    isAuth: boolean;
};