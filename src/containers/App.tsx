import React, {Component} from 'react';
import { JsxAttributeLike } from 'typescript';
import './App.css'
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
import IPerson from '../interfaces'
import WithClass from '../HOC/WithClass'
import Aux from '../HOC/Auxilliary'

// class App extends React.Component {
class App extends React.PureComponent {
    constructor(props: any ){
        super(props)
        console.log('[App] constructor start')
        // this.state = {} 
    }
    // static getDerivedStateFromProps(props: any, state: any){
    //     console.log('[App] getDerivedStateFromProps', props)
    //     return state
    // }
    componentDidMount(){
        console.log('[App] componentDidMount start')
    }

    // shouldComponentUpdate(nextProps: any, nextState: any){
    //     console.log('[App] shouldComponentUpdate');
    //     // if (nextProps.persons !== this.state.persons){
    //     //     return true
    //     // } else {
    //     //     return false
    //     // }
    //     return true;
    // }

    componentDidUpdate(){
        console.log('[App] componentDidUpdate')
    }
   state = {
        persons: [
            {id: 'id1', name: 'max1', age: 22},
            {id: 'id2', name: 'max2', age: 23},
            {id: 'id3', name: 'max3', age: 24}
        ],
        showPersons: false,
        showCockpit: true
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
            // console.log(id)
            // console.log(personIndex)
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
        console.log('[App] render start')
        let persons = null;
        if (this.state.showPersons) {
           persons = <Persons 
               persons={this.state.persons}
               changed={this.changeNameHandler}
               clicked={this.deletePersonHandler}/>
        }
        // ========== App ==============  
       
        return (
            <WithClass className='App'>
                <button 
                onClick={()=>{ 
                    this.setState( {showCockpit: false});
                }}>delete cocpit</button>
                {this.state.showCockpit ?(<Cockpit 
                persons={this.state.persons}
                //info transfer optimization
                personsLength={this.state.persons.length}
                clicked={this.tooglePersonHandler}/>): null}
              {persons}
            </WithClass>
        )
    }


}


export default App
