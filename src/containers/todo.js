import React from "react";
import { useSelector } from "react-redux";
import { Todo } from "../features";

import { handleAddClick } from "../handlers/todo";
import { TodoItemContainer } from ".";

function TodoContainer() {
  const list = useSelector((state) => state);

  return (
    <Todo>
      <Todo.List>
        {list.map((item) => (
          <TodoItemContainer item={item} key={item.id} />
        ))}
      </Todo.List>
      <Todo.ControlButton onClick={handleAddClick}>Add Item</Todo.ControlButton>
    </Todo>
  );
}

export default TodoContainer;
