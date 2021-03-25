import React, {useState} from 'react';
import TodoList from './Components/TodoLIst';
import NewTodo from './Components/NewTodo'
import { Todo } from './todo.model'


const App: React.FC  = () => {
  
  const [todos, setTodos] = useState<Todo[]>([])
    

  const todoAddHandler = (todoText: string) =>{
    // setTodos([...todos, {id: Math.random().toString(), text: todoText}])
    setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), text: todoText}])
  }

  const todoDeleteHandler = (id: string) => {
     setTodos( prevTodos => {
       return prevTodos.filter(todo => todo.id !== id)
     })
  }
  return (
    <div className="App">
       <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
}


export default App;
