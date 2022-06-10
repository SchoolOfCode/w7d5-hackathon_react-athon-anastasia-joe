import React from 'react'
import './App.css';
import Input from '../Input'
import List from '../List'
import ListItem from '../List/ListItem'
import {useState} from 'react'


function App() {

    
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
