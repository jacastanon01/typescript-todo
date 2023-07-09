import React, { useContext, useState} from 'react';
import Input from './components/Input';
import { TodoType } from './model';
import TodosDisplay from './components/TodosDisplay';
import { TodoContextProvider, TodoContext } from './context/TodosContext';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string | number>("")
  const [todosList, setTodosList] = useState<TodoType[]>([])
  const { state, dispatch } = useContext(TodoContext)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // if (todosList){
    //   setTodosList([...todosList, {id: Date.now(), text: todo, isComplete: false}])
    //   setTodo("")
    // }
    dispatch({
      type: "ADD_TODO",
      text: todo
    })
    setTodo("")
    console.log(state)
  }

  return (
    <div className="container">
      <span className="header">
        Taskify
      </span>
      <TodoContextProvider>
        <Input todo={todo} setTodo={setTodo} onSubmit={handleSubmit}/>
        <TodosDisplay todos={todosList} setTodos={setTodosList} />
      </TodoContextProvider>
    </div>
  );
}

export default App;
