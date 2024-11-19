import { useState } from 'react';
import '../styles/Todo/todoContainer.css';
import TodoList from './TodoList';
const TodoContainer: React.FC = () => {
    const [newTodo, setNewTodo] = useState<string>('');
    const [todos, setTodos] = useState<string[]>([]);

    const addTodo = () => {
        if (newTodo.trim() === '') return;
        setTodos([...todos, newTodo]);
        setNewTodo('');
    };

    const deleteTodo = (index: number) => {
        setTodos(todos.filter((_, ind) => ind !== index));
    };

    return (
        <div className="todo-container">
            <h1>ToDo-List</h1>
            <div className="input-btn-container">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add Todo List"
                />
                <button onClick={addTodo}>Add</button>
            </div>
            <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
};

export default TodoContainer;
