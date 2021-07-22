import React from "react";
import { useSelector } from "react-redux";
import { TODO_ACTIONS } from "../actions/todo";
import store from "../app/store";
import { Todo } from "../features";

function TodoContainer() {
  const list = useSelector((state) => state);
  const handleAddClick = () => store.dispatch({ type: TODO_ACTIONS.ADD_ITEM });
  
  return (
    <Todo>
      <Todo.Button onClick={handleAddClick}>Add Item</Todo.Button>
      <Todo.List>
        {list.map((item) => (
          <Todo.Item key={new Date().getTime()}>
            <Todo.Label htmlFor="todo-1">
              <Todo.Input id="todo-1" type="checkbox" />
              <Todo.Text>{item.name}</Todo.Text>
            </Todo.Label>
          </Todo.Item>
        ))}

        <Todo.Item>
          <Todo.Label htmlFor="todo-1">
            <Todo.Input id="todo-1" type="checkbox" />
            <Todo.Text>Just do it</Todo.Text>
          </Todo.Label>
        </Todo.Item>
        <Todo.Item>
          <Todo.Label htmlFor="todo-1">
            <Todo.Input id="todo-1" type="checkbox" />
            <Todo.Text>Just do it</Todo.Text>
          </Todo.Label>
        </Todo.Item>
        <Todo.Item>
          <Todo.Label htmlFor="todo-1">
            <Todo.Input id="todo-1" type="checkbox" />
            <Todo.Text>Just do it</Todo.Text>
          </Todo.Label>
        </Todo.Item>
        <Todo.Item>
          <Todo.Label htmlFor="todo-1">
            <Todo.Input id="todo-1" type="checkbox" />
            <Todo.Text>Just do it</Todo.Text>
          </Todo.Label>
        </Todo.Item>
      </Todo.List>
    </Todo>
  );
}

export default TodoContainer;
