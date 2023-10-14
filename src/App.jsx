import { useState } from 'react'
import './App.css'
import ToDoList from './components/ToDoList'
import ToDoForm from './components/ToDoForm'

function App() {
  const [toDoItems, setToDoItems]  = useState([]);

  const addToDo = (text) => {
    const newToDoItem = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setToDoItems([...toDoItems, newToDoItem]);
  };

  const markComplete = (id) => {
    const updatedItems = toDoItems.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });

    setToDoItems(updatedItems);
  };

  const removeToDo = (id) => {
    const updatedItems = toDoItems.filter((item) => item.id !== id);
    setToDoItems(updatedItems);
  }

  return (
    <>
      <h1>To-Do List</h1>
      <ToDoForm addToDo={addToDo} />
      <ToDoList
        toDoItems={toDoItems}
        markComplete={markComplete}
        removeToDo={removeToDo}
        />
    </>
  );
}

export default App
