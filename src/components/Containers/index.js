import styled from "styled-components";

export const Wrapper = styled.div``;

// app root container
export const AppContainer = styled(Wrapper)`
  margin: 5rem auto;
`;

export const CitySelect = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    option,
    select {
      font-size: 12px;
    }
  }
`;

// reusable flex container
export const FlexContainer = styled(Wrapper)`
  display: flex;
  justify-content: ${(props) => props.space};
  align-items: center;
  position: relative;
  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.mt};

  .hide {
    display: none;
  }
  .arrow {
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    position: absolute;
  }
  .next {
    right: 0;
  }
  .arrow:hover {
    cursor: pointer;
    background-color: var(--secondary-color);
    border-radius: 50%;
    padding: 3px;
  }
`;

export const GridContainer = styled(Wrapper)`
  display: grid;
  grid-template-columns: ${(props) => props.gridColumns};
  column-gap: 10px;
`;
