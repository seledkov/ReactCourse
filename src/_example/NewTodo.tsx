import React, { useRef } from 'react'
import './TodoList.css' 

type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {

    const userInputRef = useRef<HTMLInputElement>(null)

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = userInputRef.current!.value // получаем значение инпута
        console.log(enteredText);
        props.onAddTodo(enteredText)

    }
    // 2х стороняя привязка
    // const userInputLog = (event: any) => {
    //     console.log(event.target.value)
    // }

    return <form onSubmit={todoSubmitHandler}>
        <div className='form-control'>
            <label htmlFor="todo-text">Todo text</label>
            <input type="text" id='todo-text' ref={userInputRef}/>
        </div>
        <button type='submit' >add Todo</button>
    </form>
}

export default NewTodo;