import React, { useState } from 'react'
import {useState,useEffect} from 'react';

const TaskCard = () => {

    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);

    useEffect(()=>{
        console.log("without Array",{count})
    })
    useEffect(()=>{
        console.log("empty Array",{count})
    },[])
    useEffect(()=>{
        console.log('run when "Count " changes',{count})
    },[count])
    useEffect(()=>{
        console.log('run when "Toggle " changes',{toggle})
    },[toggle])


    console.log({count})
  return (
    <div>
      <div className="task-card">
        <button onClick={setCount(count+1)}>+</button>
        <div>{count}</div>
        <button onClick={setCount(count-1)}>-</button>

        <div>
            <button onClick={()=>setToggle(!toggle)}>Toggle</button>


        </div>
      </div>
    </div>
  )
}

export default TaskCard
