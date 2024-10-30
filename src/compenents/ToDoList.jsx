import React from 'react';
import ToDo from './ToDo';
import '../css/todolist.css';

const ToDoList = ({ todos, onRemoveTodo, onUpdateTodo }) => {
    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <ToDo
                    key={todo.id}
                    todo={todo}
                    onRemoveTodo={onRemoveTodo}
                    onUpdateTodo={onUpdateTodo}
                />
            ))}
        </div>
    );
};

export default ToDoList;

