import '../styles/Todo/todoList.css';
import { MdDelete } from 'react-icons/md';

interface Lsit {
    todos: string[];
    deleteTodo: (index: number) => void;
}
const TodoList: React.FC<Lsit> = ({ todos, deleteTodo }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    <span>{todo}</span>
                    <button
                        onClick={() => {
                            deleteTodo(index);
                        }}
                    >
                        <MdDelete />
                    </button>
                </li>
            ))}
        </ul>
    );
};
export default TodoList;
