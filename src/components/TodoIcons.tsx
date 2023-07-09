import React, { ReactElement, useContext } from 'react'
import { TodoContext } from '../context/TodosContext';
import {AiFillDelete, AiFillEdit, AiOutlineCheck} from "react-icons/ai"
import { TodoType } from '../model';

interface IconProps {
    //handleDelete: () => void;
    handleEdit: () => void;
    //handleComplete: () => void;
    todo: TodoType;
}

const TodoIcons = ({ handleEdit, todo}: IconProps): ReactElement => {
    const { dispatch } = useContext(TodoContext)
  return (
    <div className="todo__icons">
        <span className="icon" onClick={handleEdit}>
            <AiFillEdit />

        </span>
        <span className="icon" onClick={() => {
            dispatch({
                type: "DELETE_TODO",
                id: todo.id
            })
        }}>
            <AiFillDelete />
            
        </span>
        <span className="icon" onClick={() => {
            dispatch({
                type: "COMPLETE_TODO",
                id: todo.id
            })
        }}>
            <AiOutlineCheck />
            
        </span>
    </div>
  )
}

export default TodoIcons