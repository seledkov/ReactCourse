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
            {id: 'mama1', name: 'max1', age: 22},
            {id: 'mama2', name: 'max2', age: 23},
            {id: 'mama3', name: 'max3', age: 24}
        ],
        showPersons: true
   }

   deletePersonHandler = (personIndex:number):void => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons]
        console.log(persons)
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
   }

    changeNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
          this.setState( { 
            persons: [  
                {id: 'mama1', name: 'max1', age: 22},
                {id: 'mama2', name: event.target.value, age: 23},
                {id: 'mama3', name: 'max3', age: 24}
            ]
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
            backgroundColor: 'lightyellow',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        }

        let persons = null;
        if (this.state.showPersons) {
            persons = 
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                               <Person 
                                  name={person.name}
                                  age={person.age}
                                  changed={this.changeNameHandler}
                                  clicked={()=>this.deletePersonHandler(index)}  
                                  key={person.id}/>
                        )
                    })}
          
             </div>
            
        }
        return (
           
            <div className='App'>
                <h1>hi</h1>
                <p> this is working</p>
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
