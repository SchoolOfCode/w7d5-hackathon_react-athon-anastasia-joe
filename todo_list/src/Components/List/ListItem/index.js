import React from 'react'

const ListItem = (props) => {
    return (
        <div>
            <input type='checkbox'></input>
            <li>{props.item}</li>
            <button>Delete this todo</button>
        </div>
    )
}

export default ListItem