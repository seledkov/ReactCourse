import React, { useEffect, useRef } from 'react'
import './Cockpit.css'

interface ICockpitProps {
  personsLength: number,
  persons?: object[],
  clicked: (event: React.MouseEvent)=> void
}

const Cockpit = (props: ICockpitProps) => {
//todoimportant
  const toggleBtnRef = useRef<HTMLButtonElement>(null)
  

// ========== useEffect test =============
  console.log('Cockpit render')
      useEffect(()=> {
      console.log('[Cockpit] use effect 1 ')
      // console.log('http request...')
      // setTimeout(()=>{
      //     alert('[Cockpit] timeout closed')
      // }, 1500);
      toggleBtnRef.current?.click();
      // return () => {
      //   // 2.  чтобы быть более точным, он запускается перед запуском функции основного использования, но после (первого) цикла рендеринга
      //   // 1. "Теперь это также может быть полезно, если у вас есть какая-то операция,
      //   //  которую на самом деле следует отменять всякий раз, когда компонент перерисовывается"с
      //   console.log(' [Cockpit] use effect 1 cleanup')
      // }
    }, [])
    useEffect(()=>{
      console.log('[Cockpit] use effect 2')
      return ()=>{
        console.log('[Cockpit] use effect 2 cleanup ')
      }
    })
    // ==========================
    // const style = {
     //     backgroundColor: 'green',
     //     color: 'white',
     //     border: '1px solid blue',
     //     padding: '8px',
     //     cursor: 'pointer',
     // style.backgroundColor =' red'
     // if (this.state.persons.length > 1) style.color = 'blue' // test
    
    const classes: string[] = [];
    if (props.personsLength<=2){
      classes.push('red')
    }
    if (props.personsLength<=1){
      classes.push('bold')
    }
  
 return (
     <div className="Cockpit">
           <h1>hi</h1>
              <p className={classes.join(' ')}> this is working</p>
                <button
                // style={style}
                className='button'
                // onClick={()=>console.log('click')}
                onClick={props.clicked}
                ref={toggleBtnRef} >
                    Toogle Person
              </button>
     </div>
 )
}

export default React.memo(Cockpit) ;