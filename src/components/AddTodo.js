import React, { useState } from "react";

function AddTodo(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const addtodo = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or description cannot be empty");
    } else {
      props.addingTodos(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div className="container my-3">
      <h3 className="text-info">Add Todo</h3>
      <form onSubmit={addtodo}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>

        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-block btn-primary">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
