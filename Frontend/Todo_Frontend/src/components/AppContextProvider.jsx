import { createContext, useState } from "react";

// Create Context with default values
export const AppContext = createContext({
    isAuth: false,
    loading: false,
    user: {},
    userName: "",
    setIsAuth: () => {},
    setIsLoading: () => {},
    setUser: () => {},
    setUserName: () => {},
});

// Provide Context
// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [loading, setIsLoading] = useState(false);
    const [user, setUser] = useState({});
    const [userName, setUserName] = useState("");

    const value = {
        isAuth,
        setIsAuth,
        loading,
        setIsLoading,
        user,
        setUser,
        userName,
        setUserName,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
