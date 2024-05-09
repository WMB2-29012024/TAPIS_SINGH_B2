import React, { useRef } from 'react'

const Task = () => {
    const countRef = useRef();
    const handleButtonClick = () =>{
        const currNum = countRef.current.innerText;
        countRef.current.innerText = Number(currNum)+1;

    }
    const DechandleButtonClick = () =>{
        const currNum = countRef.current.innerText;
        countRef.current.innerText = Number(currNum)-1;

    }
  return (
    <div>
      <h1 ref={countRef}>0</h1>
      <button onClick={handleButtonClick}>Increase</button>
      <button onClick={DechandleButtonClick}>Decrease</button>
    </div>
  )
}

export default Task
