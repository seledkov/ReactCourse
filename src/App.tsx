import React, {Component} from 'react';
import { JsxAttributeLike } from 'typescript';
import Person from './Person/Person';

interface PersonItem {
    name: string, age: number
}

class App extends Component {
   state = {
        persons: [  
            {name: 'max1', age: 22},
            {name: 'max2', age: 23},
            {name: 'max3', age: 24}
        ]
   }

    changeNameHandler = (newName: string) => { 
        console.log('click')
        this.setState( { 
            persons: [  
                {name: 'maxim', age: 22},
                {name: newName, age: 23},
                {name: 'max3', age: 24}
            ]
            
        } )
    }

    render (){
        const style = {margin: '40px 40px'}
        return (
            
            <div className='App'
            style={style}>
                <h1>hi</h1>
                <p> this is working</p>
                <button onClick={this.changeNameHandler.bind(this, 'maximilian')}>Chenge name</button>   
                <Person  name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person click={()=>this.changeNameHandler('max!')} name={this.state.persons[1].name} age={this.state.persons[1].age}>study react!</Person>
                <Person  name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        )
    }

    
}


export default App;
