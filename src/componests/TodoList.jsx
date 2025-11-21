import React from 'react';
import { TodoItem } from './TodoItem';

export function TodoList({
    todos,
    toggleTodo,
    editId,
    setEditId,
    editText,
    setEditText,
    handleEditTodo
}) {
    return (
        <div className="card">
            <ul>
                {todos.length > 0 ? (
                    todos.map((todo, index) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            toggleTodo={toggleTodo}
                            index={index}
                            editId={editId}
                            setEditId={setEditId}
                            editText={editText}
                            setEditText={setEditText}
                            handleEditTodo={handleEditTodo}
                        />
                    ))
                ) : (
                    <li className="no-tasks-message">
                        ¡Todo listo! No hay tareas pendientes.
                    </li>
                )}
            </ul>
        </div>
    );
}
