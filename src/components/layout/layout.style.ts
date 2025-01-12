import styled from "styled-components";
import { COLORS } from "../../styles/constants";

const AppLayout = styled.div`
  border: 4px solid ${COLORS.brand};
  width: 1000px;
  margin: 30px auto;
  padding: 4px;
  background-color: ${COLORS.brand};
`;

const MainContainer = styled.main`
  display: flex;
  height: 600px;
`;

const AppTitle = styled.h2`
  display: inline-block;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export { MainContainer, AppLayout, AppTitle, Header };
