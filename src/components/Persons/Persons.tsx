import React, { Component } from 'react';
import Person from './Person/Person';


import IPerson from '../../interfaces'


  interface IPersonsProps  {
     //todo if persons: IPerson[] -> jsx error app.tsx into <Persons /> 
   persons: any,
   clicked?: (index: number) => void,
   // props => foo
   changed?: (event: React.ChangeEvent<HTMLInputElement>, id:string) => void,
   }

const persons = (props: IPersonsProps) => {
   console.log('Persons render')
   
 return (

    props.persons.map((person: IPerson, index: number) => {
        return (
               <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={()=>props.clicked!(index)}
            changed={(event: React.ChangeEvent<HTMLInputElement>)=>props.changed!(event, person.id)}
            // changed={(event: React.ChangeEvent<HTMLInputElement>)=>props.changed!(event, person.id)}
            />

            )
       })
 )
}

export default persons;