import { useState } from 'react';
import TodoList from './TodoList';

const Todo = () => {
	const [todos, setTodos] = useState([]);
	const [todoText, setTodoText] = useState(' ');
	const handleTodo = () => {
		let singleTodo = {
			text: todoText,
			status: false,
			id: Math.random(),
		};
		setTodos([...todos, singleTodo]);
		setTodoText('');
	};

	const handleStatus = id => {
		setTodos(
			todos.map(ele => (ele.id === id ? { ...ele, status: !ele.status } : ele))
		);
	};
	return (
		<div className='container'>
			<TodoList todos={todos} handleStatus={handleStatus} />
			<input
				type='text'
				placeholder='write something...'
				value={todoText}
				onChange={e => setTodoText(e.target.value)}
			/>
			<button onClick={handleTodo}>+</button>
		</div>
	);
};

export default Todo;
