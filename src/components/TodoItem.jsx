const TodoItem = ({ todo, handleStatus }) => {
	return (
		<div className='todo'>
			<h3
				style={{
					textDecoration: `${todo.status ? 'line-through' : 'none'}`,
				}}
			>
				•{todo.text}
			</h3>
			<p
				style={{
					color: `${todo.status ? 'green' : 'red'}`,
				}}
			>
				{todo.status ? 'Done ✓' : 'Pending ✕'}
			</p>
			<button onClick={() => handleStatus(todo.id)}>
				{!todo.status ? 'Mark as completed' : 'Remove from completed'}
			</button>
		</div>
	);
};

export default TodoItem;
