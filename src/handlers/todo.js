import { TODO_ACTIONS } from "../actions/todo";
import store from "../app/store";

export const handleAddClick = () =>
  store.dispatch({ type: TODO_ACTIONS.ADD_ITEM });
export const handleDeleteClick = (id) =>
  store.dispatch({ type: TODO_ACTIONS.REMOVE_ITEM, payload: { id } });

export const handleItemClick = (e, id) => {
  e.stopPropagation();
  store.dispatch({ type: TODO_ACTIONS.CHECK_ITEM, payload: { id } });
};

