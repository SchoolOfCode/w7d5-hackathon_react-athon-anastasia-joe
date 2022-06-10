import React from 'react'
import './App.css';
import Input from '../Input'
import List from '../List'
import ListItem from '../List/ListItem'
import {useState} from 'react'

function App() {

  const [text, setText] = useState('')



  return (
    <div className="App">
    <Input />
    <List>
      <ListItem text='something' />
      <ListItem text='something' />
      <ListItem text='something' />

    </List>

    </div>
  );
}

export default App;
