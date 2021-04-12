import styled from "styled-components";
import Card from "@material-ui/core/Card";

// modify Material UI Card
export const StyledCard = styled(Card)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: var(--mainTransition);
  cursor: pointer;

  &&:hover {
    opacity: 0.85;
    box-shadow: var(--mainShadow);
  }
  active {
    border: 2px dotted red;
  }
  .value {
    font-size: 14px;
  }

  @media (max-width: 700px) {
    .value {
      font-size: 10px;
    }
  }
`;
