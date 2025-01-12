import styled from "styled-components";
import { COLORS } from "../../styles/constants";

const ListContainer = styled.section`
  min-width: 320px;
  max-height: 100%;
  overflow-y: scroll;
  background-color: ${COLORS.background};
`;

export { ListContainer };
