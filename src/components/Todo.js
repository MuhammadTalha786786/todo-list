import React from "react";
import { TodoItem } from "./TodoItem";
function Todo(props) {
  return (
    <div className="container">
      <h3 className=" text-warning my-3">Todos List:</h3>
      {props.todos.length === 0 ? (
        <h4 className=" text-decoration-underline   text-center text-danger">
          No Todos Available Add the Todo
        </h4>
      ) : (
        props.todos.map((todo, key) => (
          <>
            <TodoItem key={key} todo={todo} onDelete={props.onDelete} />
            <hr />
          </>
        ))
      )}
    </div>
  );
}

export default Todo;
