
import { useState } from "react";
import { ToDoListComponent } from "./ToDoListComp";
import { ToDoList } from "./ToDoList";

export function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleResetTodos = () => {
    setTodos([]);
  };

  const handleRemoveTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <ToDoListComponent onAdd={handleAddTodo} onReset={handleResetTodos} />
      <ToDoList todos={todos} onRemove={handleRemoveTodo}  />
    </div>
  );
}