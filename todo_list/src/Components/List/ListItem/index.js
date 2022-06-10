import React from 'react'

const ListItem = (props) => {
    return (
        <div>
            <input type='checkbox'></input>
            <li>{props.text}</li>
            <button>Delete this todo</button>
        </div>
    )
}

export default ListItem