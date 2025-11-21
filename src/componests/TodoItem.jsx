

import React from "react";

export function TodoItem({
    todo,
    toggleTodo,
    index,
    editId,
    setEditId,
    editText,
    setEditText,
    handleEditTodo
}) {
    const { id, task, completed } = todo;

    const handleTodoClick = () => {
        toggleTodo(id);
    };

    const handleSave = () => {
        if (editText.trim() !== '') handleEditTodo(id, editText);
    };

    return (
        <li className="todo-item">
            <input type="checkbox" checked={completed} onChange={handleTodoClick} />
            <span className="todo-index">{index + 1}-</span>

            {editId === id ? (
                <>
                    <input
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        placeholder="Editar tarea..."
                    />
                    <button onClick={handleSave}>💾</button>
                </>
            ) : (
                <>
                    <span className="todo-task">{task}</span>
                    <button onClick={() => { setEditId(id); setEditText(task); }}>✏️</button>
                </>
            )}
        </li>
    );
}

