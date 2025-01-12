import styled from "styled-components";
import { COLORS } from "../../styles/constants";

const AppLayout = styled.div`
  width: 1000px;
  margin: 30px auto;
  background-color: ${COLORS.brand};
`;

const MainContainer = styled.main`
  display: flex;
  height: 600px;
`;

export { MainContainer, AppLayout };
