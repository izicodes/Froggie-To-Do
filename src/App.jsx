import "./style.css";

export default function MainApp() {
  return (
    <>
      <form action="" className="new-item-form">
        <div className="form-row">
          <label htmlFor="newItem">Add New Item:</label>
          <input type="text" name="newItem" id="newItem" />
        </div>
        <button className="btn">Add item!</button>
      </form>
      <h1 className="header">To-Do List!</h1>
      <ul className="list">
        <li>
          <label><input type="checkbox"/>Item 1</label>
          <button className="btn btn-danger">Delete me!</button>
        </li>
      </ul>
    </>
  );
}
