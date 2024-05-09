import React from 'react'
import Card from './components/Card'


function Task() {
    const componentArray = [1,2,3,4,5,6];

  return (
    <div>
       

        {
            componentArray.map((elem)=>{
                console.log(elem)
                return <Card text={elem} key={elem}/>
                
            })
        }
    </div>
  )
}

export default Task