import React from 'react'
import './App.css';
import Input from '../Input'
import List from '../List'
import ListItem from '../List/ListItem'
import {useState} from 'react'


function App() {

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
    <div className="App">
    <Input />
    <List>
      <ListItem />
      <ListItem />
      <ListItem />

    </List>

    </div>
  );
}

export default App;
