import React from 'react';
import ToDoItem from './ToDoItem';

function toDoList({ toDoItems, markComplete, removeToDo }) {
    return (
            <ul>
                {toDoItems.map((item) => (
                    <ToDoItem 
                    key={item.id} 
                    item={item} 
                    markComplete={markComplete}
                    removeToDo={removeToDo}
                    />
                ))}
            </ul>
    );
}

export default toDoList;