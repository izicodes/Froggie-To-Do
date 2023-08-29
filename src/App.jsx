import { useState } from "react";
import "./style.css";

export default function MainApp() {
  const [newItem, setNewItem] = useState("");
  const [todos, setToDos] = useState([]);

  function handleSubmit(e) {
    // prevents page from refreshing when clicking the button
    e.preventDefault();

    setToDos((currentTodo) => {
      return [
        // ...currentTodo is used to create a copy of the currentTodo array.
        // all the existing to-do items in the currentTodo array will be included in the new array being created.
        ...currentTodo,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });

    setNewItem("");
  }

  // Function for when you click the checkbox!
  function toggleToDo(id, completed) {
    setToDos((currentTodo) => {
      return currentTodo.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo, completed
          }
        }
        return todo;
      });
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit} action="" className="new-item-form">
        <div className="form-row">
          <label htmlFor="newItem">Add New Item:</label>
          <input
            value={newItem}
            type="text"
            // The onChange = change event handler
            onChange={(e) => setNewItem(e.target.value)}
            name="newItem"
            id="newItem"
          />
        </div>
        <button className="btn">Add item!</button>
      </form>
      <h1 className="header">To-Do List!</h1>
      <ul className="list">
        {/* The map renders the list items with the each to-do item added */}
        {todos.map((todo) => {
          return (
            // use key instead of id for the unique identifier
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleToDo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button className="btn btn-danger">Delete me!</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
