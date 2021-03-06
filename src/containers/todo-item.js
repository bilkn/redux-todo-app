import React, { useState } from "react";
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
    if (e.target.value.length < 140) setDesc(e.target.value);
  };

  return (
    <Todo.Item key={id}>
      <Todo.ItemWrapper
        onClick={(e) => (!editable ? handleItemClick(e, id) : null)}
      >
        {editable ? (
          <Todo.Input value={desc} onChange={handleTodoTextChange} />
        ) : (
          <>
            <Todo.Checkbox
              onClick={(e) => handleItemClick(e, id)}
              type="checkbox"
            >
              {isChecked && <Check size="26" />}
            </Todo.Checkbox>
            <Todo.Text isChecked={isChecked}>{todoDesc}</Todo.Text>
          </>
        )}
      </Todo.ItemWrapper>
      {editable ? (
        <Todo.Button onClick={(e) => handleAcceptClick(e, id, desc)}>
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
