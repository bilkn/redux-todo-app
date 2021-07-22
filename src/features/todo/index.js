import React from "react";
import {
  Container,
  List,
  Item,
  Text,
  Button,
  Label,
  Checkbox,
} from "./styles/todo";

function Todos({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Todos.List = function TodosList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

Todos.Item = function TodosItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Todos.Text = function TodosText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

Todos.List = function TodosList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

Todos.Button = function TodosButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

Todos.Label = function TodosLabel({ children, ...rest }) {
  return <Label {...rest}>{children}</Label>;
};

Todos.Checkbox = function TodosCheckbox({ ...rest }) {
  return <Checkbox {...rest} />;
};

export default Todos;
