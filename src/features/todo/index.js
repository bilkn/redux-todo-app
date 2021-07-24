import React from "react";
import {
  Container,
  List,
  Item,
  Title,
  Text,
  Button,
  ControlButton,
  Label,
  Checkbox,
  Input,
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

Todos.Title = function TodosTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
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

Todos.ControlButton = function TodosControlButton({ children, ...rest }) {
  return <ControlButton {...rest}>{children}</ControlButton>;
};

Todos.Label = function TodosLabel({ children, ...rest }) {
  return <Label {...rest}>{children}</Label>;
};

Todos.Checkbox = function TodosCheckbox({ children, ...rest }) {
  return <Checkbox {...rest}>{children}</Checkbox>;
};

Todos.Input = function TodosInput({ ...rest }) {

  return <Input {...rest}  />;
};

export default Todos;
