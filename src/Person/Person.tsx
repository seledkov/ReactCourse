import React from 'react'

interface PersonProps  {
name: string,
age: number,
click?: any
}
const person: React.FC<PersonProps> = (props) => {
return (
    <p onClick={props.click}>i am {props.name} Person {props.age} age , {props.children}</p>
)
}

export default person