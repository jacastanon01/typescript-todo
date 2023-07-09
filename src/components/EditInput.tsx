import React, { useContext } from 'react'
import { TodoType } from '../model';
import { TodoContext } from '../context/TodosContext';

interface PropsTypes {
    //todos: TodoType[];
    todo: TodoType;
    //setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
    handleEdit: () => void;
}

const EditInput: React.FC<PropsTypes> = ({todo, handleEdit}: PropsTypes) => {
    const {dispatch} = useContext(TodoContext)
  return (
    <div className="edit-input">
        <input type="text" min="3" onChange={(e) => {
            dispatch({
                type: "EDIT_TODO",
                id: todo.id,
                text: e.target.value
            })
        }} />
        <button className="edit-input__btn" onClick={handleEdit}>Done</button>
    </div>
  )
}

export default EditInput