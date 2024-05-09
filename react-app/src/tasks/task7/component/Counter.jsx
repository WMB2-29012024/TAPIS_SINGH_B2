import React, { useRef, useState } from 'react'
let count=0;
const Counter = () => {
    
    const [toggle, setToggle] = useState(10);

    const divRef = useRef(0);
    
    console.log("first",count ,{toggle},{divRef});

    const handleClickButton =()=>{

        console.log("inner1",count,divRef );
        
        count++;
        console.log("inner2",count,divRef );

        setToggle(toggle+1);
        console.log({toggle},divRef);
    };
    console.log("outer",count ,{toggle} );
  return (
    <div>
      {console.log("return",count , {toggle})}
    <button onClick={handleClickButton}>click to increase the num Count :{count}  Toggle :{toggle}</button>
    </div>
  )
}

export default Counter
