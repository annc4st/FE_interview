import React from "react";

const Pagination = ({ pageCount, onPageChange, currentPage }) => {
  let pageNumbers = [];

  for (let i = 1; i < pageCount; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-div">
      <ul className="pagination">
        {pageNumbers.map((num) => (
          <li
            key={num}
            onClick={() => onPageChange(num)}
            className={currentPage === num ? "activePage" : null}
          >
            {num}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
