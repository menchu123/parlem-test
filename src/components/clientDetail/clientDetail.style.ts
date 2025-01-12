import styled from "styled-components";

const DetailContainer = styled.section`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const Detail = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 100%;
  border: 1px solid white;
`;

export { Detail, DetailContainer };
