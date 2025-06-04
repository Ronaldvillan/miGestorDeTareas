// import React from 'react';
// import { TodoItem } from './TodoItem';

// export function TodoList({ todos, toggleTodo }) {
//     return (
//         <div className="card">
//             <ul>
//                 {todos.length > 0 ? (
//                     todos.map((todo, index) => (
//                         <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} index={index} />
//                     ))
//                 ) : (
//                     <li className="no-tasks-message">¡Todo listo! No hay tareas pendientes.</li>  // El mensaje solo aparece cuando la lista está vacía
//                 )}
//             </ul>
//         </div>
//     );
// }

import React from 'react';
import { TodoItem } from './TodoItem';

export function TodoList({ todos, toggleTodo }) {
    return (
        <div className="card">
            <ul>
                {todos.length > 0 ? (
                    todos.map((todo, index) => (
                        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} index={index} />
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


