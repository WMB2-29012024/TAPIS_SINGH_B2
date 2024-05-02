import React from 'react'

function FormComponent({setinputText}) {

    const handleInputTextForm = (e) =>{
        e.preventDefault();
        console.log(e.target.txt.value);
        setinputText(e.target.txt.value)
    }
  return (
    <form onSubmit={handleInputTextForm}>
      <label>Enter your name:
        <input 
            type="text"
            placeholder="Enter your name"
            id='txt'
                   
        />

      </label>
      <button>Submit</button>
    </form>
  )
}

export default FormComponent