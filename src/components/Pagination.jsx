import React from "react";
import classNames from "classnames";

const Pagination = ({ total, currentPage, changePage }) => {
  const [FIRST_PAGE_INDEX, LAST_PAGE_INDEX] = [1, total];
  const checkIsDisabled = index => classNames("page-item", { disabled: currentPage === index });
  const checkIsActive = index => classNames("page-item", { active: currentPage === index });

  const paginationItems = [...Array(LAST_PAGE_INDEX).keys()]
    .map(index => {
      let result = null;
      const pageIndex = index + 1;

      if (
        pageIndex === FIRST_PAGE_INDEX ||
        pageIndex === LAST_PAGE_INDEX ||
        pageIndex === currentPage ||
        pageIndex === currentPage - 1 ||
        pageIndex === currentPage + 1
      ) {
        result = (
          <li className={checkIsActive(pageIndex)} key={pageIndex}>
            <a className="page-link" href={`#${pageIndex}`} onClick={changePage(pageIndex)}>
              {pageIndex}
            </a>
          </li>
        );
      }
      return result;
    })
    .filter((item, index, list) => {
      return item || (!item && list[index - 1]);
    })
    .map((item, index) => {
      if (!item) {
        return (
          <li className="page-item disabled" key={`dots-${index}`}>
            <a className="page-link">...</a>
          </li>
        );
      }
      return item;
    });

  return (
    <nav aria-label="Статьи по Bootstrap 4">
      <ul className="pagination justify-content-center">
        <li className={checkIsDisabled(FIRST_PAGE_INDEX)}>
          <a className="page-link" href="#Prev" onClick={changePage(currentPage - 1)}>
            Prev
          </a>
        </li>
        {paginationItems}
        <li className={checkIsDisabled(LAST_PAGE_INDEX)}>
          <a className="page-link" href="#Next" onClick={changePage(currentPage + 1)}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
