import React from 'react'

const ButtonComponent = () => {
    const clickHandle =()=>{
        console.log("clicked")
        alert(" Button clicked");
    }

    const rightHandleClick =(e)=>{
        console.log("right clicked");
        alert("right clicked")
    }
  return (
    <div>
         <button
         onClick={clickHandle}
        onContextMenu={rightHandleClick}
         
         >Click</button>
         
    </div>
  )
}

export default ButtonComponent
