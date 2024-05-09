import React from 'react'
import Inputfield from './components/Inputfield'


const Task = () => {
  return (
    <div>
      <Inputfield name={"username"} type={"text"} placeholder={"Enter your name"}/>
      <Inputfield name={"Contact"} type={"tel"} placeholder={"Enter your phone number"}/>
      <Inputfield name={"Email"} type={"email"} placeholder={"Enter your email"}/>
    </div>
  )
}

export default Task
