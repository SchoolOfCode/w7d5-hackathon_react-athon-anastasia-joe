import React from 'react'

const Input = (props) => {
    return (
        <div>
            <h1>Todo List</h1>
            <input ></input>
            <button type="text" onClick={props.theValue} >Add a todo</button>
            <br/>
            <h3>Filters:</h3>
            <button>Pending</button>
            <button>Done</button>
        </div>
    )
}

export default Input