
// import React from "react";

// export function TodoItem({ todo, toggleTodo, index }) {
//     const { id, task, completed } = todo;

//     const handleTodoClick = () => {
//         toggleTodo(id);
//     };

//     return (
//     <li className="card">
//     <input type="checkbox" checked={completed} onChange={handleTodoClick} />
//     <span className="todo-index">{index + 1 }- </span> {/* Índice */}
//     <span>{task}</span> {/* Tarea */}
// </li>
//     );
// }

import React from "react";

export function TodoItem({ todo, toggleTodo, index }) {
    const { id, task, completed } = todo;

    const handleTodoClick = () => {
        toggleTodo(id);
    };

    return (
        <li className="card">
            <input type="checkbox" checked={completed} onChange={handleTodoClick} />
            <span className="todo-index">{index + 1}-</span> {/* Índice fijo */}
            <span className="todo-task">{task}</span> {/* Texto que se adapta */}
        </li>
    );
}


