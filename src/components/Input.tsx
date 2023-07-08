import React, { useRef } from 'react'
import "./styles.css"

interface PropTypes {
    todo: string | number;
    setTodo: React.Dispatch<React.SetStateAction<string | number>>;
    onSubmit: (e: React.FormEvent) => void;
}

const Input = ({todo, setTodo, onSubmit}: PropTypes) => {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <form className="input" onSubmit={(e) => {
            onSubmit(e)
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