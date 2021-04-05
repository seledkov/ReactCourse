import React from 'react'
import './Person.css'

interface PersonProps  {
name: string,
age: number,
clicked?: () => void,
// прямая передача ссылки
changed?: (event: React.ChangeEvent<HTMLInputElement>)=> void
// changed?: any
}

const person: React.FC<PersonProps> = (props) => {

    console.log('Person render')
    
return (
    <div className = 'Person'>
        <p onClick={props.clicked}>i am {props.name} Person {props.age} age , {props.children}</p>
        {/* создание новой функции вызывающей переданную функцию   онврап=сейфчек=props.changed && props.changed() безопасный вызов фу  если тру то вызови* */}
        {/* <input onChange={(event: React.ChangeEvent<HTMLInputElement>)=>props.changed && props.changed(event)} value={props.name} type='text'/> */}
        {/* передача ссылки  в ончандж*   */}
        <input onChange={props.changed} value={props.name} type='text'/>
    </div>

)
}

export default person