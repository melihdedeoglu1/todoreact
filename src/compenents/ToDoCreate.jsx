import React, { useState } from 'react';
import '../css/todolist.css';

function ToDoCreate({ onCreateToDo }) {
    const [newTodo, setNewTodo] = useState('');

    const createTodo = () => {
        if (!newTodo) return;
        const request = {
            id: Math.floor(Math.random() * 99999999),
            content: newTodo,
        };
        onCreateToDo(request);
        setNewTodo('');
    };

    return (
        <div className="input-container">
            <input
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                type="text"
                placeholder="Yeni görev ekle..."
            />
            <button onClick={createTodo}>Ekle</button>
        </div>
    );
}

export default ToDoCreate;
