import React, { useContext, useRef } from 'react'
import "./styles.css"
import { TodoContext } from '../context/TodosContext';

interface PropTypes {
    todo: string | number;
    setTodo: React.Dispatch<React.SetStateAction<string | number>>;
    onSubmit: (e: React.FormEvent) => void;
}

const Input = ({todo, setTodo, onSubmit}: PropTypes) => {
    const { dispatch} = useContext(TodoContext)
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <form className="input" onSubmit={(e) => {
            e.preventDefault()
            dispatch({
                type: "ADD_TODO",
                text: todo
            })
            setTodo("")
            inputRef.current?.blur()
        }}>
            <input 
                min="3"
                ref={inputRef} 
                value={todo} 
                type="input" 
                placeholder="enter a task" 
                className="input__box" 
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="input__btn">Go</button>
        </form>
    )
}

export default Input