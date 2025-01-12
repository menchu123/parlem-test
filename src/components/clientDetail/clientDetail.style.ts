import styled from "styled-components";
import { COLORS } from "../../styles/constants";

const DetailContainer = styled.section`
  display: flex;
  flex-grow: 2;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${COLORS.white};
`;

const Detail = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 100%;
  border: 1px solid white;
`;

const Product = styled.div`
  width: 250px;
  padding: 10px;
  margin: 10px 10px 0 0;
  background-color: ${COLORS.brand};
`;

const ProductList = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 600px;
`;

export { Detail, DetailContainer, Product, ProductList };
