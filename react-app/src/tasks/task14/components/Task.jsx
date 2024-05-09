import React, { useEffect, useState } from 'react'

const Task = () => {
    const [todoData,setTodoData] = useState([]);

    console.log("1" ,todoData)
    useEffect(()=>{
       const fetchData= (async()=>{
            const response = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await response.json();
            console.log(data);
            setTodoData(data);

        })
        fetchData();
    } ,[]);

    
  return (
    <div>
      <h1>Show the data neeche</h1>
        <ol>
           
                {
                    todoData.map((todo) =>{
                        return <li>{todo.title}</li>
                        
                    })
                }
         
        </ol>
      
    </div>
  )
}

export default Task
