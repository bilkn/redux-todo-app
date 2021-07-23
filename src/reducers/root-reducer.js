import { TODO_ACTIONS } from "../actions/todo";
import { v4 as uuidv4 } from "uuid";

const defaultState = [];

function rootReducer(state = defaultState, action) {
  console.log(action);
  switch (action.type) {
    case TODO_ACTIONS.ADD_ITEM:
      return [
        ...state,
        {
          id: uuidv4(),
          desc: "",
          isChecked: false,
          editable: true,
        },
      ];
    case TODO_ACTIONS.REMOVE_ITEM:
      return state.filter((item) => item.id !== action.payload.id);
    case TODO_ACTIONS.CHECK_ITEM: {
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, isChecked: !item.isChecked }
          : item
      );
    }
    case TODO_ACTIONS.ACCEPT_ITEM: {
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, editable: false, desc: action.payload.desc }
          : item
      );
    }

    default:
      console.log(`unhandled action type ${action.type}!`);
      break;
  }
  return state;
}

export default rootReducer;
