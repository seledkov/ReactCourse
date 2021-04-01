import React, {Component} from 'react';
import { JsxAttributeLike } from 'typescript';
import './App.css'
import Person from './Person/Person';

interface IPerson {
 id: string, name: string, age: number
}


class App extends React.Component {
   state = {
        persons: [
            {id: 'id1', name: 'max1', age: 22},
            {id: 'id2', name: 'max2', age: 23},
            {id: 'id3', name: 'max3', age: 24}
        ],
        showPersons: true
   }

   deletePersonHandler = (personIndex:number):void => {
        // const persons = this.state.persons.slice(); // без аргументов копирует массив
        const persons: IPerson[] = [...this.state.persons]
        console.log(persons)
        // по индексу удаляем 1элемент
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
   }

    changeNameHandler = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
    // changeNameHandler = (event: React.ChangeEvent, id: string) => {
           // возвращаем айди элемента если проверка тру
            const personIndex = this.state.persons.findIndex(p => {
                //проверка айди каждого элемента массива с переданным айди от евента ченжед
             return p.id === id
            })
            console.log(id)
            console.log(personIndex)
            const person: IPerson = {
                ...this.state.persons[personIndex]
            }
            person.name = event.target.value
            const persons: IPerson[] = [...this.state.persons]
            persons[personIndex] = person
          this.setState( {
            persons: persons
        } )
    }

    tooglePersonHandler = (event: React.MouseEvent): void => {
        let newShowPersons: boolean = this.state.showPersons
        this.setState({
            showPersons: !newShowPersons
        })
    }

    render (){
        const style = {
            backgroundColor: 'green',
            color: 'white',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        }

        let persons = null;
        if (this.state.showPersons) {
           persons =
             <div>
               {this.state.persons.map((person: IPerson, index: number) => {
                 return (
                    <Person
                     name={person.name}
                     age={person.age}
                     changed={(event: React.ChangeEvent<HTMLInputElement>)=>this.changeNameHandler(event, person.id)}
                     clicked={()=>this.deletePersonHandler(index)}
                     key={person.id}/>
                 )
              })}
            </div>

            style.backgroundColor =' red'
            // if (this.state.persons.length > 1) style.color = 'blue' // test
        }

        const classes: string[] = [];
        if (this.state.persons.length<=2){
          classes.push('red')
        }
        if (this.state.persons.length<=1){
          classes.push('bold')
        }
        return (

            <div className='App'>
              <h1>hi</h1>
              <p className={classes.join(' ')}> this is working</p>
                <button
                   style={style}
                   onClick={this.tooglePersonHandler}>Toogle Person
              </button>
             {persons}
            </div>
        )
    }


}


export default App;
