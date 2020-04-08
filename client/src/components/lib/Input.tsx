import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const InputIcon = styled(FontAwesomeIcon)`
  padding-left: 0.7em;
`;

const Input = styled.input`
  padding-left: 0.7em;
  padding-right: 0.7em;
  outline: none;
  border: none; 
  width: 95%;
  height: 40px;
  background-color: #2c2c30;
  color: white;
  font-size: 16px;
  font-weight: 400;
  border-radius: 5px;
`;

export default Input;