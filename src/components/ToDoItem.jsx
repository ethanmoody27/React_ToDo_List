import React from 'react'

function toDoItem({ item, markComplete, removeToDo }) {
    return (
        <li>
            <input
                type="checkbox"
                checked={item.completed}
                onChange={() => markComplete(item.id)}
            />
            {item.text}
            <button onClick={() => removeToDo(item.id)}>Remove</button>
        </li>
    );
}

export default toDoItem;