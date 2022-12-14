import { createContext, useEffect, useState } from "react";

import { getUsers } from '../services/user'
export const dataContext = createContext();


export const DataContextProvider = ({ children }) => {
    const [user, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then((res) => setUsers(res.user));


    }, []);
    
    return (

        <dataContext.Provider value={{ user }}>
            {children}
        </dataContext.Provider>
    );
};