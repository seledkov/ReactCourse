import React  from 'react'
import './NewTodo.css'

interface TodoListProps {
    items: {id: string, text: string}[],
    onDeleteTodo: (id: string) => void,
}

const TodoList: React.FC<TodoListProps> = (props) => {
    return (
            <ul>
                Todo List: 
                {props.items.map(todo=>{
                  return (
                  <li key={todo.id}>
                    <span>{todo.text}</span>
                    {/* todo - bind */}
                    <button onClick={props.onDeleteTodo.bind(null, todo.id)}>Delete</button> 
                  </li>  
                  )
                })}
            </ul>
    )
}

export default TodoList