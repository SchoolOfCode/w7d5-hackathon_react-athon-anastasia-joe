import React, { useState } from 'react'


const Input = (props) => {

    const [toDo, setToDo] = useState('')

  function handleChange(e) {
    console.log(e.target.value);
    setToDo(e.target.value) 
    console.log(setToDo)
  }

  function onClickToDo (e) {
    // console.log(e.target.value)
    console.log(e.target.value);
    setToDo(e.target.value) 
    console.log(setToDo)
  }
       return (
        <div>
            <h1>Todo List</h1>
            <input onChange={props.theValue} ></input>
            <button type="text" >Add a todo</button>
            <br/>
            <h3>Filters:</h3>
            <button>Pending</button>
            <button>Done</button>
        </div>
    )
}

export default Input