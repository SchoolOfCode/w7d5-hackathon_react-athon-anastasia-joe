const Input = (props) => {

       return (
        <div>
            <h1>Todo List</h1>
            <input onChange={props.theValue} ></input>
            <button onClick={props.onClickToDo} >Add a todo</button>
            <br/>
            <h3>Filters:</h3>
            <button>Pending</button>
            <button>Done</button>
        </div>
    )
}

export default Input