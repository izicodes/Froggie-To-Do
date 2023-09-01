import { useEffect, useState } from "react";
import "./style.css";
import Navbar from "./Navbar";
import PageWrapper from "./components/PageWrapper";

export default function MainApp() {
    const [newItem, setNewItem] = useState("");
    const [todos, setToDos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
    // Load todos from local storage when the component mounts
    const [darkMode, setDarkMode] = useState(false);

  

  // Save todos to local storage whenever the todos state changes
  useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

    function toggleDarkMode() {
        const toggleMode = darkMode === false ? true : false;
        setDarkMode(toggleMode);
    }
    useEffect(() => {
        console.log(darkMode);
    }, [darkMode]);

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
            //  map function is used to create a new array based on
            // the currentTodo array and loops through it
            return currentTodo.map((todo) => {
                // gets the exact todo we want to change via the id
                if (todo.id === id) {
                    return {
                        /* 
              creates a new object that has all the properties 
              of the current to-do item (todo), but the completed 
              property is updated to the value of the completed 
              parameter passed to the function.
            */
                        ...todo,
                        completed,
                    };
                }
                return todo;
            });
        });
    }

    // Function that deletes a todo
    function deleteToDo(id) {
        setToDos((currentTodos) => {
            return currentTodos.filter((todo) => todo.id !== id);
        });
    }

    return (
        <>
            <PageWrapper lightMode={darkMode === false ? "light" : "dark"}>
                <div className="todo-container">
                    <button className="toggle" onClick={toggleDarkMode}>
                        {darkMode === false ? "Dark mode 🌚" : "Light mode 🌞"}
                    </button>
                    <Navbar />
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
                        {todos.length === 0 && "Haven't added any to-dos!"}
                        {/* The map renders the list items with the each to-do item added */}
                        {todos.map((todo) => {
                            return (
                                // use key instead of id for the unique identifier
                                <li key={todo.id}>
                                    <label>
                                        <input type="checkbox" checked={todo.completed} onChange={(e) => toggleToDo(todo.id, e.target.checked)} autoComplete="nope" />
                                        {todo.title}
                                    </label>
                                    <button onClick={() => deleteToDo(todo.id)} className="btn btn-danger">
                                        Delete me!
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </PageWrapper>
        </>
    );
}
