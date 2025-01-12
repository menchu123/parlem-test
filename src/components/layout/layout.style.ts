import styled from "styled-components";
import { COLORS } from "../../styles/constants";

const AppLayout = styled.div`
  width: 1000px;
  border: 1px solid green;
  margin: 30px auto;
  background-color: ${COLORS.brand};
`;

const MainContainer = styled.main`
  display: flex;
  height: 600px;
  border: 1px solid black;
`;

export { MainContainer, AppLayout };
