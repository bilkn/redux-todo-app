import React from "react";
import { Provider } from "react-redux";
import store from "../app/store";

function TodoProvider({ children, ...rest }) {
  return (
    <Provider store={store} {...rest}>
      {children}
    </Provider>
  );
}

export default TodoProvider;
