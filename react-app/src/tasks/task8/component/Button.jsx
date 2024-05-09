import React from 'react'

const button1 = ({cnt,setCnt}) => {
    
    const handleIncreasefun =()=>{
        
        setCnt(cnt+1);
    }
    const handleDecreasefun =()=>{
        
        setCnt(cnt-1);
    }
  return (
    <div>
      <button onClick={handleIncreasefun}>Increase</button>
      <button onClick={handleDecreasefun}>Decrease</button>
    </div>
  )
}

export default button1

