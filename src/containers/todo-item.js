import React, { useState } from "react";
import { TODO_ACTIONS } from "../actions/todo";
import store from "../app/store";
import { Todo } from "../features";
import {
  handleDeleteClick,
  handleItemClick,
  handleAcceptClick,
} from "../handlers/todo";
import { Trash } from "@styled-icons/fa-solid/Trash";
import { Check } from "@styled-icons/boxicons-regular/Check";

function TodoItemContainer(props) {
  const { id, desc: todoDesc, isChecked, editable } = props.item;
  const [desc, setDesc] = useState("");

  const handleTodoTextChange = (e) => {
    if (e.target.value.length < 30) setDesc(e.target.value);
  };

  return (
    <Todo.Item onClick={(e) => handleItemClick(e, id)} key={id}>
      <Todo.Label htmlFor={id}>
        {editable ? (
          <Todo.Input id={id} value={desc} onChange={handleTodoTextChange} />
        ) : (
          <>
            <Todo.Checkbox
              onClick={(e) => handleItemClick(e, id)}
              id={id}
              type="checkbox"
            >
              {isChecked && <Check size="26" />}
            </Todo.Checkbox>
            <Todo.Text isChecked={isChecked}>{todoDesc}</Todo.Text>
          </>
        )}
      </Todo.Label>
      {editable ? (
        <Todo.Button onClick={() => handleAcceptClick(id, desc)}>
          <Check size="26" />
        </Todo.Button>
      ) : (
        <Todo.Button onClick={() => handleDeleteClick(id)}>
          <Trash size="22" />
        </Todo.Button>
      )}
    </Todo.Item>
  );
}

export default TodoItemContainer;
