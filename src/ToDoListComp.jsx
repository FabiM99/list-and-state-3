import { useState } from "react";
export function ToDoListComponent({ onAdd, onReset }) {
    const [newToDo, setNewToDo] = useState("");
  
    const handleChange = (e) => {
      setNewToDo(e.target.value);
    };
  
    const handleAddToDo = () => {
      if (newToDo.trim() !== "") {
        onAdd(newToDo);
        setNewToDo("");
      }
    };

    const handleResetToDo = () => {
       onReset();
        setNewToDo("")
      
    }
  
    return (
      <div>
        <h2>ToDoList</h2>
        <input
          type="text"
          value={newToDo}
          onChange={handleChange}
          placeholder="Add something to do"
        ></input>
        <button onClick={handleAddToDo}>Add</button>
        <button onClick={handleResetToDo}>Remove all</button>

      </div>
    );
  }