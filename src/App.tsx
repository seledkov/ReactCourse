import React, {Component} from 'react';
import { JsxAttributeLike } from 'typescript';
import './App.css'
import Person from './Person/Person';



class App extends React.Component {
   state = {
        persons: [  
            {name: 'max1', age: 22},
            {name: 'max2', age: 23},
            {name: 'max3', age: 24}
        ],
        showPersons: true
   }

   deletePersonHandler = (personIndex:number):void => {
        const persons = this.state.persons;
        console.log(this.state.persons)
        persons.splice(personIndex, 1);
        console.log(this.state.persons)
        this.setState({persons: persons})
   }

    changeNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
          this.setState( { 
            persons: [  
                {name: 'max1', age: 22},
                {name: event.target.value, age: 23},
                {name: 'max3', age: 24}
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
                                />
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
