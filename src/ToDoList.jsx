export function ToDoList({ todos, onRemove }) {
  const handleRemove = (index) => {
    onRemove(index)

  }
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemove(index)}>Remove</button>
            </li>
        ))}
      </ul>
    </div>
  );
}

