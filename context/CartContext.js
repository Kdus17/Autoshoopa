"use client"
import {createContext, useReducer} from "react";
import {CartReducer} from "@/reducer/CartReducer";

export const CartContext = createContext();


export const CartProvider = ({children}) => {

    const newHashmap = new Map();
    const [state, dispatch] = useReducer(CartReducer, newHashmap )


    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}