import React from 'react'
import './App.css';
import Input from '../Input'
import List from '../List'
import ListItem from '../List/ListItem'
import {useState} from 'react'


function App() {

      
  function handleChange(e) {
    console.log(e.target.value);
    // setText(e.target.value) 
  }

  return (
    <div className="App">
    <Input theValue={handleChange}/>
    <List>
      <ListItem />
      <ListItem />
      <ListItem />

    </List>

    </div>
  );
}

export default App;
