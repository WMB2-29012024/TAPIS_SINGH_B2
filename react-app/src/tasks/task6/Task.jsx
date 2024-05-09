import React from 'react'
import ButtonComponent from './conponent/ButtonComponent'

const Task = () => {
    const handleButtonClick = () =>{
        alert("button clicked")
    }
    // const handleSecButtonClick = () =>{
    //     alert("Second button clicked")
    // }
  return (
    <div>
      <ButtonComponent btnClick={handleButtonClick}/>
      <ButtonComponent btnClick= {() => alert("second button clicked")} />
    </div>
  )
}

export default Task
