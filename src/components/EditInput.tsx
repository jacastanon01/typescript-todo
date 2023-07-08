import React from 'react'
import { TodoType } from '../model';

interface PropsTypes {
    todos: TodoType[];
    todo: TodoType;
    setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
    handleEdit: () => void;
}

const EditInput: React.FC<PropsTypes> = ({todo, todos, setTodos, handleEdit}: PropsTypes) => {
  return (
    <div className="edit-input">
        <input type="text" min="3" onChange={(e) => 
            setTodos(todos.map(p => p.id === todo.id ? 
                {
                    ...p, 
                    text: e.target.value
                } : p
            ))
        } />
        <button className="edit-input__btn" onClick={handleEdit}>Done</button>
    </div>
  )
}

export default EditInput