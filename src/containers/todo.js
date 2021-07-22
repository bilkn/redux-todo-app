import React from "react";
import { useSelector } from "react-redux";
import { TODO_ACTIONS } from "../actions/todo";
import store from "../app/store";
import { Todo } from "../features";
import { Trash } from "@styled-icons/fa-solid/Trash";

function TodoContainer() {
  const list = useSelector((state) => state);
  const handleAddClick = () => store.dispatch({ type: TODO_ACTIONS.ADD_ITEM });
  const handleDeleteClick = (id) =>
    store.dispatch({ type: TODO_ACTIONS.REMOVE_ITEM, payload: { id } });

  const handleItemClick = (e, id) => {
    e.stopPropagation();
    console.log(list);
    store.dispatch({ type: TODO_ACTIONS.CHECK_ITEM, payload: { id } });
  };

  return (
    <Todo>
      <Todo.Button onClick={handleAddClick}>Add Item</Todo.Button>
      <Todo.List>
        {list.map(({ id, desc, isChecked }) => (
          <Todo.Item onClick={(e) => handleItemClick(e, id)} key={id}>
            <Todo.Label htmlFor={id}>
              <Todo.Checkbox id={id} type="checkbox" isChecked={isChecked} />
              <Todo.Text isChecked={isChecked}>{desc}</Todo.Text>
            </Todo.Label>
            <Todo.Button onClick={() => handleDeleteClick(id)}>
              <Trash size="24" />
            </Todo.Button>
          </Todo.Item>
        ))}
      </Todo.List>
    </Todo>
  );
}

export default TodoContainer;
