import styled from "styled-components";
import { COLORS } from "../../../styles/constants";

const ClientButton = styled.button<{ $isSelected: boolean }>`
  width: 300px;
  height: 34px;
  padding: 8px;
  border: 1px solid red;
  margin: 8px 10px;
  text-align: left;
  background-color: ${({ $isSelected }) =>
    $isSelected ? COLORS.brand : COLORS.white};
`;

export { ClientButton };
