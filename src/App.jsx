import React, { useState } from 'react';
import './App.css';
import ToDoList from './compenents/ToDoList';
import ToDoCreate from './compenents/ToDoCreate';

function App() {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState('');

  const removeTodo = (todoID) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoID);
    setTodos(updatedTodos);
    setMessage('Görev silindi.');
  };

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    setMessage('Görev eklendi.');
  };

  const updateTodo = (editedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id !== editedTodo.id ? todo : editedTodo
    );
    setTodos(updatedTodos);
    setMessage('Görev güncellendi.');
  };

  return (
    <div>
      <h1>My To-Do Application</h1>
      <ToDoCreate onCreateToDo={createTodo} />
      <ToDoList
        todos={todos}
        onRemoveTodo={removeTodo}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
