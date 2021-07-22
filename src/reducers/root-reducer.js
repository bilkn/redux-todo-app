import { TODO_ACTIONS } from "../actions/todo";

const defaultState = [];

function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case TODO_ACTIONS.ADD_ITEM:
      console.log("add item")
      return [...state,{ name: "kamil" }];
    default:
      console.log(`unhandled action type ${action.type}!`);
      break;
  }
  return state;
}

export default rootReducer;
