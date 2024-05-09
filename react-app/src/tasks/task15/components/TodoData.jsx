import React from 'react'

const TodoData = ({todoData}) => (
    <div>
        <h1>Todo Data:</h1>
        {todoData.title ? (
            <>
                <p>Id:{todoData.id}</p>
                <p>title:{todoData.title}</p>
                <p>Status:{String(todoData.completed)}</p>
            </>
        ) : (
            <p>No data found</p>
        )}
    </div>
)

export default TodoData
