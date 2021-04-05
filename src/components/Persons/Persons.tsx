import React from 'react';
import Person from './Person/Person';
// import IPersons from '../../containers/App'

interface IPerson {
   id: string, name: string, age: number
  }

  interface IPersonsProps  {
     //todo if persons: IPerson[] -> jsx error app.tsx into <Persons /> 
   persons: any,
   //todo
   clicked?: (index: number) => void,
   // changed?: (event: React.ChangeEvent, id: number | string) => string | undefined,
   changed?: any,
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
            />

            )
       })
 )
}

export default persons;