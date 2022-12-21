import { createContext, useEffect, useState } from "react";
import { getProduct } from "../services/products";
import { createUser } from '../services/user';

export const dataContext = createContext();


export const DataContextProvider = ({ children }) => {
    const [user, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
 
    useEffect(() => {
        createUser().then((res) => setUsers(res.user));
        getProduct().then((res) => setProducts(res.product))

    }, []);

    return (

        <dataContext.Provider value={{ user, setUsers,products,setProducts }}>
            {children}
        </dataContext.Provider>
    );
};