import React from 'react'
import { useRef } from 'react'
const Task = () => {
    const boxRef = useRef();
    const handleButtonClick = () =>
    {
        boxRef.current.style.display = "none";
    }
    const handleButtonClickShowBox = () =>
    {
        boxRef.current.style.display = "block";
    }
  return (
    <div>
        <div ref={boxRef } style={{width:"100px", height:"100px", backgroundColor:"red"}}></div>
        <button onClick={handleButtonClick}>Hide box</button>
        <button onClick={handleButtonClickShowBox}>Show box</button>
    </div>
  )
}

export default Task
