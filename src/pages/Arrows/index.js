import React from "react";
import PropTypes from "prop-types";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { FlexContainer } from "../../components";

export const Arrows = ({
  goToPreviousPage,
  goToNextPage,
  pages,
  currentPage,
}) => {
  return (
    <FlexContainer margin='20px' space='space-between'>
      <ArrowBackIcon
        className={`arrow prev ${currentPage === 1 && "hide"}`}
        onClick={() => goToPreviousPage()}
      />

      <ArrowForwardIcon
        className={`arrow next ${currentPage === pages && "hide"}`}
        onClick={() => goToNextPage()}
      />
    </FlexContainer>
  );
};
Arrows.propTypes = {
  goToNextPage: PropTypes.func.isRequired,
  goToPreviousPage: PropTypes.func.isRequired,
  pages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};
