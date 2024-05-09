import React from 'react'

const Inputfield = (props) => {

  return (
    <div>
      <label htmlFor={props.name}>{props.name}</label>
      <input type={props.type}
        placeholder={props.placeholder}
        id={props.name}
      />
    </div>
  )
}

export default Inputfield

