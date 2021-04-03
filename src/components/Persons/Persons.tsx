import React from 'react';
import Person from './Person/Person';
// import IPersons from '../../containers/App'

interface IPerson {
   id: string, name: string, age: number
  }

  interface IPersonsProps  {
     //todo if persons: IPerson[] -> jsx error app.tsx into <Persons /> 
   persons: any,
   clicked?: any,
   changed?: any,
   }
const persons = (props: IPersonsProps) => {
 return (
    props.persons.map((person: IPerson, index: number) => {
        return (
               <Person
            key={person.id}
            name={person.name}
            age={person.age}
            changed={(event: React.ChangeEvent<HTMLInputElement>)=>props.changed(event, person.id)}
            clicked={()=>props.clicked(index)}
            />

            )
       })
 )
}

export default persons;