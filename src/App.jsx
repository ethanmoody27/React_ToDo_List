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

    const sortedItems = updatedItems.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));

    setToDoItems(sortedItems);
  };

  const removeToDo = (id) => {
    const updatedItems = toDoItems.filter((item) => item.id !== id);

    setToDoItems(updatedItems);
  }

  return (
    <>
      <div class="App">
        <h1>To-Do List</h1>
        <ToDoForm addToDo={addToDo} />
        <ToDoList
          toDoItems={toDoItems}
          markComplete={markComplete}
          removeToDo={removeToDo}
          />
        </div>
    </>
  );
}

export default App;

