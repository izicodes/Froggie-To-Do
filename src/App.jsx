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
  }

  return (
    <>
      <form onSubmit={handleSubmit} action="" className="new-item-form">
        <div className="form-row">
          <label htmlFor="newItem">Add New Item:</label>
          <input
            value={newItem}
            type="text"
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
            <li id={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed} />
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
