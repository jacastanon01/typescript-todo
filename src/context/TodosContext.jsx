import React, { ReactNode, useReducer, useContext, createContext, useState } from "react";

export const TodoContext = createContext(null)

export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, [])

    return (
        <TodoContext.Provider value={{state, dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}

function reducer(action, state){
    switch (action.type) {
        case "ADD_TODO":
            return state
        case "DELETE_TODO":
            return
        case "EDIT_TODO":
            return
        default: 
            return 
    }
}
