import React from 'react'
import './Person.css'

interface PersonProps  {
name: string,
age: number,
clicked?: () => void,
//todo - google ts
// changed?: () => string,
changed?: any
}

const person: React.FC<PersonProps> = (props) => {

    console.log('Person render')
return (
    <div className = 'Person'>
        <p onClick={props.clicked}>i am {props.name} Person {props.age} age , {props.children}</p>
        <input onChange={props.changed} value={props.name} type='text'/>
    </div>

)
}

export default person