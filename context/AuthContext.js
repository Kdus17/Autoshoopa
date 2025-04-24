"use client"
import {createContext, useEffect, useReducer} from "react";
import {authReducer} from "@/reducer/AuthReducer";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, {
        token: null
    } );

    useEffect(() => {
        dispatch({
            type: "LOGIN",
            payload:{
                token: localStorage.getItem("autoshoppa-token")
            }
        })
    }, [])



    return <AuthContext.Provider value={{state, dispatch}}>
        {children}
    </AuthContext.Provider>

}