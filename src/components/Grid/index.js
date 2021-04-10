import styled from "styled-components";
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.gridColumns};
  column-gap: 10px;
`;
