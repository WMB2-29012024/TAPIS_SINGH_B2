import React from 'react'
import { useRef } from 'react';
const Task = () => {
    const inputRef = useRef();
    const hadleInputChange =()=>{
        console.log(inputRef.current.value)

    }

  return (
    <div>
      <input ref={inputRef} type="text"  onChange={hadleInputChange}  />
    </div>
  )
}

export default Task
