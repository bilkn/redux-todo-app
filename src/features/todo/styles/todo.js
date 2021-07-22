import styled from "styled-components/macro";

export const Container = styled.div`
  font-size: 1.5rem;
  margin: auto;
`;

export const List = styled.ul`
  & li:first-child {
    margin-top: 0;
  }
`;

export const Item = styled.li`
  margin-top: 1em;
`;

export const Button = styled.button``

export const Text = styled.p``;

export const Label = styled.label`
  align-items: center;
  display: flex;
`;

export const Input = styled.input`
  background: white;
  border-radius: 5px;
  cursor: pointer;
  height: 30px;
  margin-right: 2em;
  width: 30px;

  &:checked {
    background-color: red;
  }
`;
