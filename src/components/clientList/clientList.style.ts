import styled from "styled-components";
import { COLORS } from "../../styles/constants";

const ListContainer = styled.section`
  max-height: 100%;
  overflow-y: scroll;
  background-color: ${COLORS.background};
`;

const List = styled.ul``;

export { List, ListContainer };
