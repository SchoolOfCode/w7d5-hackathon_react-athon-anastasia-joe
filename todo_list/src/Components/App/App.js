import React from 'react'
import './App.css';
import Input from '../Input'
import List from '../List'
import ListItem from '../List/ListItem'
import { useState } from 'react'


function App() {
    const [toDo, setToDo] = useState('')
    const [toList, setList] = useState({})

    function handleChange(e) {
      setToDo(e.target.value) 

    }
  
    function onClickToDo () {
      console.log(toDo)
      addTask(toDo)
    }

      function addTask(task) {
      const newTask = { id: "id", task: task, completed: false };
      setList([{...toDo, newTask}]); //needs work
      console.log(toList)
    }

    return (
    <div className="App">
    <Input theValue={handleChange} onClickToDo={onClickToDo} />
    <List >
      <ListItem />
            <ListItem text={'hello'}/>
    </List>

    </div>
  );
}

export default App;
