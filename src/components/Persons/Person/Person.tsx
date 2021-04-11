import React, { Component, Fragment } from 'react'
import './Person.css'
import Aux from  '../../../HOC/Auxilliary'
import withClass from '../../../HOC/withClass'
import { JsxElement, JsxFragment } from 'typescript'
import PropTypes from 'prop-types'


interface IPersonProps  {
name: string,
age: number,
clicked?: () => void,
// прямая передача ссылки
changed?: (event: React.ChangeEvent<HTMLInputElement>)=> void
// changed?: any
//todo children type?
children?: JsxElement
}

const person = (props:IPersonProps) => {

    console.log('Person render')
     
    //Aux == React.Fragment == Fragment
return (
    <Aux>
        
        <p onClick={props.clicked}>i am {props.name} Person {props.age} age , {props.children}</p>
        {/* создание новой функции вызывающей переданную функцию   онврап=сейфчек=props.changed && props.changed() безопасный вызов фу  если тру то вызови* */}
        {/* <input onChange={(event: React.ChangeEvent<HTMLInputElement>)=>props.changed && props.changed(event)} value={props.name} type='text'/> */}
        {/* передача ссылки  в ончандж*   */}
        <input onChange={props.changed} value={props.name} type='text'/>

    </Aux>
    )
}
person.propTypes = {
    clicked: PropTypes.func,
    changed: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    children: PropTypes.any
};
export default  withClass(person, 'Person') 
// export default person