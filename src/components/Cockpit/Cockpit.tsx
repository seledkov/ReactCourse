import React from 'react'
import './Cockpit.css'

interface ICockpitProps {
  persons: object[],
  clicked: (event: React.MouseEvent)=> void
}

const cockpit = (props: ICockpitProps) => {
    console.log('Cockpit render')
    // const style = {
     //     backgroundColor: 'green',
     //     color: 'white',
     //     border: '1px solid blue',
     //     padding: '8px',
     //     cursor: 'pointer',
     // style.backgroundColor =' red'
     // if (this.state.persons.length > 1) style.color = 'blue' // test
    
    const classes: string[] = [];
    if (props.persons.length<=2){
      classes.push('red')
    }
    if (props.persons.length<=1){
      classes.push('bold')
    }
    
 return (
     <div className="Cockpit">
           <h1>hi</h1>
              <p className={classes.join(' ')}> this is working</p>
                <button
                // style={style}
                className='button'
                onClick={props.clicked}>
                    Toogle Person
              </button>
     </div>
 )
}

export default cockpit;