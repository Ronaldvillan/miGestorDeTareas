import React, { Fragment, useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { TodoList } from './componests/TodoList';
import './componests/styles/card.css';
import './componests/styles/center.css';
import './componests/styles/noti.css';
import './componests/styles/index.css';

const KEY = "todoApp.todos";

export function App() {
    const [todos, setTodos] = useState([{ id: 1, task: 'Tarea 1', completed: false }]);
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('');
    const todoTaskRef = useRef();

    useEffect(() => {
        document.title = "MiGestorDeTareas";
    }, []);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(KEY));
        if (storedTodos) setTodos(storedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todos));
    }, [todos]);

    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
    };

    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value;
        if (task === '') return;

        setTodos((prevTodos) => [...prevTodos, { id: uuidv4(), task, completed: false }]);
        todoTaskRef.current.value = null;
    };

    const handleClearAll = () => {
        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);
    };

    const handleEditTodo = (id, newText) => {
        const newTodos = todos.map(todo =>
            todo.id === id ? { ...todo, task: newText } : todo
        );
        setTodos(newTodos);
        setEditId(null);
        setEditText('');
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") handleTodoAdd();
    };

    return (
        <Fragment>
            <div className="center">
                <h2>Agregar Tarea</h2>
                <div className="input-container">
                    <input
                        ref={todoTaskRef}
                        type="text"
                        placeholder="Nueva Tarea"
                        onKeyPress={handleKeyPress}
                    />
                    <button onClick={handleTodoAdd}>➕</button>
                    <button onClick={handleClearAll}>🗑</button>
                </div>
            </div>

            <TodoList
                todos={todos}
                toggleTodo={toggleTodo}
                editId={editId}
                setEditId={setEditId}
                editText={editText}
                setEditText={setEditText}
                handleEditTodo={handleEditTodo}
            />

            <div className="noti">
                Te quedan <p>{todos.filter((todo) => !todo.completed).length}</p> tareas por terminar
            </div>
        </Fragment>
    );
}
