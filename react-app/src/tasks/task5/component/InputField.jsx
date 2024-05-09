import React from 'react'

const InputField = () => {

    const handleSubmit = (e) =>{
        console.log(e.target.value);
    }
  return (
    <div>
      <input 
      
      type="text"
      placeholder='Enter your name'
      onChange={handleSubmit} />
    </div>
  )
}

export default InputField
