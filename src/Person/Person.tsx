import React from 'react'
import './Person.css'
interface PersonProps  {
name: string,
age: number,
clicked?: any,
changed?: any,
}
const person: React.FC<PersonProps> = (props) => {

    let rnd = Math.random();
            if (rnd > 0.9) {
                throw new Error('fail')
            }
return (
    <div className = 'Person'>
        <p onClick={props.clicked}>i am {props.name} Person {props.age} age , {props.children}</p>
        <input onChange={props.changed} value={props.name} type='text'/>
    </div>

)
}

export default person