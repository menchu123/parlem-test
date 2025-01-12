import styled from "styled-components";
import { COLORS } from "../../styles/constants";

const ListContainer = styled.section`
  border: 1px solid orange;
  max-height: 100%;
  overflow-y: scroll;
  background-color: ${COLORS.background};
`;

const List = styled.ul`
  border: 1px solid yellow;
`;

export { List, ListContainer };
