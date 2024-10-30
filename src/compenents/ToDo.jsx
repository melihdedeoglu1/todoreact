import React, { useState } from 'react';
import '../css/todolist.css';
import { IoIosRemoveCircle } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";

const ToDo = ({ todo, onRemoveTodo, onUpdateTodo }) => {
    const [editable, setEditable] = useState(false);
    const [newContent, setNewContent] = useState(todo.content);

    const removeTodo = () => {
        if (onRemoveTodo) {
            onRemoveTodo(todo.id);
        }
    };

    const updateTodo = () => {
        const request = {
            id: todo.id,
            content: newContent,
        };
        onUpdateTodo(request);
        setEditable(false);
    };

    return (
        <div className="task-item">
            {editable ? (
                <input
                    type="text"
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                />
            ) : (
                <span>{todo.content}</span>
            )}
            <div className="button-group">
                {editable ? (
                    <FaRegCheckCircle onClick={updateTodo} />
                ) : (
                    <button className="edit-button" onClick={() => setEditable(true)}>
                        <CiEdit />
                    </button>
                )}
                <button className="delete-button" onClick={removeTodo}>
                    <IoIosRemoveCircle />
                </button>
            </div>
        </div>
    );
};

export default ToDo;
