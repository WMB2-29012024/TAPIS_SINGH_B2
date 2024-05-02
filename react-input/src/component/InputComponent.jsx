import React from 'react'


function InputComponent({setInputText}) {
    const handleInputChange = (e)=>{
        console.log(e.target.value);
        setInputText(e.target.value);
    }
    
    return (
        <input
            type='text'
            placeholder='Enter your name here'
            
            onChange={handleInputChange}
        >
            

        </input>
    )
}

export default InputComponent