import { TODO_ACTIONS } from "../actions/todo";
import store from "../app/store";

export const handleAddClick = () => {
  store.dispatch({ type: TODO_ACTIONS.ADD_ITEM });
};
export const handleDeleteClick = (id) =>
  store.dispatch({ type: TODO_ACTIONS.REMOVE_ITEM, payload: { id } });

export const handleItemClick = (e, id) => {
  console.log("Hello guys")
  e.stopPropagation();
  store.dispatch({ type: TODO_ACTIONS.CHECK_ITEM, payload: { id } });
};

export const handleAcceptClick = (e, id, desc) => {
  e.stopPropagation();
  if (desc)
    store.dispatch({ type: TODO_ACTIONS.ACCEPT_ITEM, payload: { id, desc } });
};
