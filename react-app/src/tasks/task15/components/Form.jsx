import React from 'react'


const Form = ({ setTodoData }) => {

    const handleOnSubmit = async (e) => {
        e.preventDefault();


        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${e.target.inpdata.value}`);
        const data = await response.json();
        console.log(data)
        setTodoData(data);


        console.log(e.target.inpdata.value);
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="inpdata">enter the id of todo to get detail</label>
                <input type="number" id="inpdata" placeholder='Enter your ID ' />
                <button type='submit' >click to get data</button>
            </form>
        </div>
    )
}

export default Form
