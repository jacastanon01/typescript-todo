import React, { useState} from 'react';
import './App.css';
import Input from './components/Input';
import { TodoType } from './model';
import TodosDisplay from './components/TodosDisplay';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string | number>("")
  const [todosList, setTodosList] = useState<TodoType[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (todosList){
      setTodosList([...todosList, {id: Date.now(), text: todo, isComplete: false}])
      setTodo("")
    }

    console.log(todosList)
  }

  return (
    <div className="container">
      <span className="header">
        Taskify
      </span>
      <Input todo={todo} setTodo={setTodo} onSubmit={handleSubmit}/>
      <TodosDisplay todos={todosList} setTodos={setTodosList} />
    </div>
  );
}

export default App;
