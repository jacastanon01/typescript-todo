import React, { ReactElement } from 'react'
import {AiFillDelete, AiFillEdit, AiOutlineCheck} from "react-icons/ai"

interface IconProps {
    handleDelete: () => void;
    handleEdit: () => void;
    handleComplete: () => void;
}

const TodoIcons = ({handleComplete, handleDelete, handleEdit}: IconProps): ReactElement => {
  return (
    <div className="todo__icons">
        <span className="icon" onClick={handleEdit}>
            <AiFillEdit />

        </span>
        <span className="icon" onClick={handleDelete}>
            <AiFillDelete />
            
        </span>
        <span className="icon" onClick={handleComplete}>
            <AiOutlineCheck />
            
        </span>
    </div>
  )
}

export default TodoIcons