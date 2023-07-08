import React from 'react'
import "./styles.css"
import { TodoType } from '../model'
import SingleTodo from './SingleTodo';

interface TodosProps {
    todos: TodoType[];
    setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;

}

const TodosDisplay: React.FC<TodosProps> = ({todos, setTodos}: TodosProps) => {
  return (
    <div className="todos-list">
        {todos.map(t => {
        console.log(typeof(t.text))
        return (
                <SingleTodo 
                    key={t.id}
                    todo={t}
                    todos={todos}
                    setTodos={setTodos}
                />
        )
        })}
    </div>
  )
}

export default TodosDisplay