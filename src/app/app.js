import React from "react";
import { TodoContainer } from "../containers";
import { TodoProvider } from "../providers";

function App() {
  return (
    <TodoProvider>
      <TodoContainer />
    </TodoProvider>
  );
}

export default App;
