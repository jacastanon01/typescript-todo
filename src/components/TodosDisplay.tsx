import React, { useContext } from 'react'
import "./styles.css"
import { TodoType } from '../model'
import SingleTodo from './SingleTodo';
import { TodoContext } from '../context/TodosContext';

interface TodosProps {
    todos: TodoType[]; 
    setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;

}

const TodosDisplay: React.FC<TodosProps> = ({todos, setTodos}: TodosProps) => {
    const { state, dispatch } = useContext(TodoContext)
    return (
        <div className="todos-list">
            {state.todos.map(t => {
            console.log(typeof(state))
            return (
                    <SingleTodo 
                        key={t.id}
                        todo={t}
                        todos={state.todos}
                        setTodos={setTodos}
                    />
            )
            })}
        </div>
    )
}

export default TodosDisplay