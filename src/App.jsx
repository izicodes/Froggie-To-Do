import "./style.css";

export default function MainApp() {
  return (
    <form action="" className="new-item-form">
      <div className="form-row">
        <label htmlFor="newItem">Add New Item:</label>
        <input type="text" name="newItem" id="newItem" />
      </div>
      <button className="btn">Add item!</button>
    </form>
  );
}
