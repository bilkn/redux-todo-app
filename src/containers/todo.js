import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Todo } from "../features";
import { Trash } from "@styled-icons/fa-solid/Trash";
import { Check } from "@styled-icons/boxicons-regular/Check";
import {
  handleAcceptClick,
  handleAddClick,
  handleDeleteClick,
  handleItemClick,
} from "../handlers/todo";
import store from "../app/store";
import { TODO_ACTIONS } from "../actions/todo";

function TodoContainer() {
  const list = useSelector((state) => state);
  const [desc, setDesc] = useState("");

  const handleTodoTextChange = (e) => {
    setDesc(e.target.value);
  };

  const handleAcceptClick = (id, desc) => {
    if (desc)
    store.dispatch({ type: TODO_ACTIONS.ACCEPT_ITEM, payload: { id, desc } });
    setDesc("");
  };

  return (
    <Todo>
      <Todo.Button onClick={handleAddClick}>Add Item</Todo.Button>
      <Todo.List>
        {list.map(({ id, desc: todoDesc, isChecked, editable }) => (
          <Todo.Item onClick={(e) => handleItemClick(e, id)} key={id}>
            <Todo.Label htmlFor={id}>
              {editable ? (
                <Todo.Input
                  onChange={handleTodoTextChange}
                  id={id}
                  value={desc}
                />
              ) : (
                <>
                  <Todo.Checkbox
                    id={id}
                    type="checkbox"
                    isChecked={isChecked}
                  />
                  <Todo.Text isChecked={isChecked}>{todoDesc}</Todo.Text>
                </>
              )}
            </Todo.Label>
            {editable ? (
              <Todo.Button onClick={() => handleAcceptClick(id, desc)}>
                <Check size="24" />
              </Todo.Button>
            ) : (
              <Todo.Button onClick={() => handleDeleteClick(id)}>
                <Trash size="24" />
              </Todo.Button>
            )}
          </Todo.Item>
        ))}
      </Todo.List>
    </Todo>
  );
}

export default TodoContainer;
