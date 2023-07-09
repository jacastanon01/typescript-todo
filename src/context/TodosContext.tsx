import React, { ReactNode, useReducer, useContext, createContext, useState } from "react";
import { IActionType, IStateType, TodoType } from "../model";

const initialState = {todos: [] as TodoType[]}

type StateType = {todos: TodoType[]}


export const TodoContext = createContext<{
    state: IStateType;
    dispatch: React.Dispatch<IActionType>;
}>({
    state: initialState,
    dispatch: () => {}
})

export const TodoContextProvider = ({ children }: { children: ReactNode}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <TodoContext.Provider value={{state, dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}

function reducer(state: IStateType, action: IActionType):IStateType {
    //const { todos } = state
    switch (action.type) {
        case "ADD_TODO":
            
            return {...state,
                    todos: [...state.todos, {
                        id: Date.now(), 
                        text: action.text ?? "", 
                        isComplete: false
                }]
            }
        case "DELETE_TODO":
            return {...state,
                todos: state.todos.filter(t => t.id !== action.id)
            }
        case "COMPLETE_TODO":
            return {...state,
                todos: state.todos.map(t => {
                    if (t.id === action.id){
                        return {...t, isComplete: !t.isComplete}
                    } else {
                        return t
                    }
                })
            }
        case "EDIT_TODO":
            console.log("EDITED")
            return {...state,
                todos: state.todos.map(p => {
                    if (p.id === action.id){
                        return {
                            ...p, 
                            text: action.text ?? ""
                        }
                        
                    } else {
                        return p
                    }
                }
                )
            }
        default: 
            return state
    }
}

