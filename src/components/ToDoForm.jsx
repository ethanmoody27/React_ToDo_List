import React, { useState } from 'react';

function toDoForm({ addToDo }) {
    const [newToDo, setNewToDo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newToDo.trim() !== '') {
            addToDo(newToDo);
            setNewToDo('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Add a new to-do"
            value={newToDo}
            onChange={(e) => setNewToDo(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default toDoForm;