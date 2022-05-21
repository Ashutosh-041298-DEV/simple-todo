import TodoItem from './TodoItem';

const TodoList = ({ todos, handleStatus }) => {
	return (
		<div className='todos_container'>
			{todos.map(e => (
				<TodoItem key={e.id} todo={e} handleStatus={handleStatus} />
			))}
		</div>
	);
};

export default TodoList;
