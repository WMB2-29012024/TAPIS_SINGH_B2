import React, { useEffect, useState } from 'react'
import Form from './components/Form';

const Task = () => {
    


const [todoData, setTodoData] = useState([]);

   

    
    

return (
    <div>
        <Form setTodoData={setTodoData}/>
        
        <TodoData todoData={todoData}/>
        
        

    </div>
)
}

export default Task
