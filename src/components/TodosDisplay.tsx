import React, { useContext } from 'react'
import "./styles.css"
import { TodoType } from '../model'
import SingleTodo from './SingleTodo';
import { TodoContext } from '../context/TodosContext';

// interface TodosProps {
//     todos: TodoType[]; 
//     //setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;

// }

const TodosDisplay: React.FC = () => {
    const { state } = useContext(TodoContext)
    return (
        <div className="todos-list">
            {state.todos.map(t => {
                return (
                    <SingleTodo 
                        todo={t}
                    />
                )
            })}
        </div>
    )
}

export default TodosDisplay