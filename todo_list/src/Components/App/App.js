import React from 'react'
import './App.css';
import Input from '../Input'
import List from '../List'
import ListItem from '../List/ListItem'
import { useState } from 'react'


function App() {
    const [toDo, setToDo] = useState('')

    function handleChange(e) {
      console.log(e.target.value);
      setToDo(e.target.value) 

    }
  
    function onClickToDo () {
      console.log(toDo)
      //addTask(task) function
    }

    return (
    <div className="App">
    <Input theValue={handleChange} onClickToDo={onClickToDo} />
    <List >
      <ListItem />
      <ListItem />
      <ListItem />

    </List>

    </div>
  );
}

export default App;
