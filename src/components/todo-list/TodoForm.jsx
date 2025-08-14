import React from 'react';


function TodoForm({ todo, onChange, onSubmit }) {
  return (
    <form className="row g-3 align-items-end justify-content-center" onSubmit={onSubmit}>
      <div className="col-7">
        <h5>Add task</h5>
        <input
          type="text"
          onChange={onChange}
          value={todo}
          className="form-control"
          id="addTodo"
          placeholder="Todo task"
        />
      </div>

      <div className="col-1">
        <button type="submit" className="btn w-100 btn-primary">Add</button>
      </div>
    </form>
  );
}

export default TodoForm;