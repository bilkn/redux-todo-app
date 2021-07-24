import React from "react";
import { useSelector } from "react-redux";
import { Todo } from "../features";
import { handleAddClick } from "../handlers/todo";
import { TodoItemContainer } from ".";
import "styled-components/macro";

function TodoContainer() {
  const list = useSelector((state) => state);

  return (
    <>
      <Todo.Title>Todo App</Todo.Title>
      <Todo>
        <Todo.List>
          {list.map((item) => (
            <TodoItemContainer item={item} key={item.id} />
          ))}
        </Todo.List>
        <Todo.ControlButton
          css={`
            margin-top: ${list.length ? "2em" : "0"};
          `}
          onClick={handleAddClick}
        >
          Add Item
        </Todo.ControlButton>
      </Todo>
    </>
  );
}

export default TodoContainer;
