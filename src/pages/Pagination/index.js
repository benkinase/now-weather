import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { WeatherCard, Arrows } from "../index";
import { GridContainer } from "../../components";

export const Pagination = (props) => {
  // destructuring data prop
  const { data, pageSize, renderChart } = props;
  const dataLimit = data.length;

  // local state to manage pages and current page
  const [pages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setTotalPages(Math.ceil(dataLimit / pageSize));
  }, [currentPage, dataLimit, pageSize]);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }
  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function getPaginatedData() {
    const start = currentPage * pageSize - pageSize;
    const end = start + pageSize;
    const paginatedItems = data.slice(start, end);
    return paginatedItems;
  }
  return (
    <React.Fragment>
      <Arrows
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
        pages={pages}
        currentPage={currentPage}
      />
      <GridContainer gridColumns='repeat(3, 1fr)'>
        {getPaginatedData().map((cardItem, index) => {
          return (
            <WeatherCard
              cardItem={cardItem}
              cardIndex={index}
              key={index}
              renderChart={renderChart}
            />
          );
        })}
      </GridContainer>
    </React.Fragment>
  );
};
Pagination.prototypes = {
  data: PropTypes.array.isRequired,
  pageSize: PropTypes.number.isRequired,
  renderChart: PropTypes.func.isRequired,
};
