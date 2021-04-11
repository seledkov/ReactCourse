import React, { Component, Fragment } from 'react'
import './Person.css'
import Aux from  '../../../HOC/Auxilliary'
import withClass from '../../../HOC/withClass'
import { JsxElement, JsxFragment } from 'typescript'


interface IPersonProps  {
name: string,
age: number,
clicked?: () => void,
// прямая передача ссылки
changed?: (event: React.ChangeEvent<HTMLInputElement>)=> void
// changed?: any
children?: JsxElement
}

const person = (props:IPersonProps) => {

    console.log('Person render')
     
    //Aux == React.Fragment == Fragment
return (
    <Fragment>
        
        <p onClick={props.clicked}>i am {props.name} Person {props.age} age , {props.children}</p>
        {/* создание новой функции вызывающей переданную функцию   онврап=сейфчек=props.changed && props.changed() безопасный вызов фу  если тру то вызови* */}
        {/* <input onChange={(event: React.ChangeEvent<HTMLInputElement>)=>props.changed && props.changed(event)} value={props.name} type='text'/> */}
        {/* передача ссылки  в ончандж*   */}
        <input onChange={props.changed} value={props.name} type='text'/>

    </Fragment>
)
}
export default  withClass(person, 'Person') 
//tod
// export default person as JSX.Element
// export default person