import React from 'react'
import './App.css';
import Input from '../Input'
import List from '../List'
import ListItem from '../List/ListItem'
import { useState } from 'react'


function App() {
    const [toDo, setToDo] = useState('')
    const [toList, setList] = useState([])

    function handleChange(e) {
      setToDo(e.target.value) 
    }
  
    function onClickToDo () {
      const newTask = { id: "id", task: toDo, completed: false };
      console.log(newTask)
      addTask(newTask)

    }

      function addTask(task) {
      setList([...toList, task]); //needs work one behind
      console.log(toList) //map through the array
    }

    return (
    <div className="App">
    <Input theValue={handleChange} onClickToDo={onClickToDo} />
    <List >
     
            {toList.map((item =>
            {/* <ListItem item= {item} /> */}

            ))}
    </List>

    </div>
  );
}

export default App;
