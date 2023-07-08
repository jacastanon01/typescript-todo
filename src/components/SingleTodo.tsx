import React, { useState } from 'react'
import "./styles.css"

import { TodoType } from '../model';
import TodoIcons from './TodoIcons';
import EditInput from './EditInput';

interface TodoProps {
    key: number;
    todo: TodoType;
    todos: TodoType[];
    setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

const SingleTodo: React.FC<TodoProps> = ({key, todo, todos, setTodos}: TodoProps) => {
    const [isEditing, setIsEditing] = useState<boolean>(false)

    function handleEdit(){
        setIsEditing(!isEditing)
    }

    function handleDelete(){
        const fileteredTodos = todos.filter(t => t.id !== todo.id)
        setTodos(fileteredTodos)
    }

    function handleComplete(){
        const completeTodos = todos.map(t => {
            if (t.id === todo.id){
                return {...t, isComplete: !t.isComplete}
            } else {
                return t
            }
        })
        setTodos(completeTodos)
        console.log(todos)
    }

    return (
        <div className="todo__box" key={key}>
            <div className={`todo__content ${todo.isComplete ? 'completed' : ''}`}>{todo.text}</div>
            {!isEditing ? 
                <TodoIcons 
                    handleDelete={handleDelete}    
                    handleEdit={handleEdit} 
                    handleComplete={handleComplete} 
                /> : 
                <EditInput todo={todo} todos={todos} setTodos={setTodos} handleEdit={handleEdit} />
            }
        </div>
    )
}

export default SingleTodo