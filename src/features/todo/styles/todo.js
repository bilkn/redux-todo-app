import styled from "styled-components/macro";

export const Container = styled.div`
  font-size: 1.5rem;
  margin: auto;
`;

export const List = styled.ul`
  margin-top: 1em;
  & li:first-child {
    margin-top: 0;
  }
`;

export const Text = styled.p`
  margin-right: 1em;
  position: relative;
  overflow: hidden;
  &::after {
    background-color: black;
    content: " ";
    display: block;
    height: 3px;
    left: 0;
    position: absolute;
    transition: transform 0.3s;
    transform: ${({ isChecked }) =>
      isChecked ? "translate(0%,-50%)" : "translate(-101%,-50%)"};
    top: 50%;
    width: 100%;
  }
`;

export const Item = styled.li`
  display: flex;
  margin-top: 1em;
`;

export const Button = styled.button``;

export const Label = styled.label`
  align-items: center;
  cursor: pointer;
  display: flex;
`;

export const Checkbox = styled.span`
  background-color: ${({ isChecked }) => (isChecked ? "red" : "white")};
  border-radius: 5px;
  cursor: pointer;
  height: 30px;
  margin-right: 2em;
  width: 30px;
`;
