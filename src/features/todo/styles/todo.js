import styled from "styled-components/macro";
import { colors, shadows } from "../../../styles/variables";

export const Container = styled.div`
  background-color: ${colors.secondary};
  border-radius: 7px;
  box-shadow: ${shadows.common};
  font-size: 1.5rem;
  margin: auto;
  padding: 0.5em;
  width: 100%;
`;

export const List = styled.ul`
  & li:first-child {
    margin-top: 0;
  }
`;

export const Text = styled.p`
  font-size: 1.2rem;
  margin-right: 1em;
  max-width: 10ch;
  position: relative;
  text-decoration: ${({ isChecked }) => (isChecked ? "line-through" : "unset")};
  overflow: hidden;
  /*   &::after {
    background-color: black;
    border-radius: 5px;
    content: " ";
    display: block;
    height: 3px;
    left: 0;
    position: absolute;
    transition: transform 0.3s;
    top: 50%;
    width: 100%;
  } */
`;

export const Item = styled.li`
  display: flex;
  margin-top: 1em;
`;

export const Button = styled.button`
  border-radius: 7px;
  box-shadow: ${shadows.common2};
  color: ${colors.darkGray};
  margin-left: auto;
  padding: 0.7em;
`;

export const ControlButton = styled.button`
  background-color: ${colors.extra};
  border-radius: 7px;
  box-shadow: ${shadows.common2};
  color: ${colors.darkGray};
  display: block;
  font-size: 1.2rem;
  margin: 0 auto;
  margin-top: 2em;
  padding: 0.5em 1.5em;
  transition: background-color 150ms;

  &:hover,
  &:focus {
    background-color: ${colors.secondaryLight};
  }
`;

export const Label = styled.label`
  align-items: center;
  cursor: pointer;
  display: flex;
`;

export const Checkbox = styled.span`
  align-items: center;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  height: 30px;
  justify-content: center;
  margin-right: 2em;
  width: 30px;

`;

export const Input = styled.input`
  border: none;
  border-radius: 7px;
  box-shadow: ${shadows.common2};
  color: ${colors.darkGray};
  font-size: 1.2rem;
  margin-right: 1em;
  padding: 0.5em 1.5em;
  outline: none;
  width: 100%;
`;
