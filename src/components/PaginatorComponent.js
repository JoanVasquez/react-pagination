import React from "react";

const ComponentPaginator = props => {
  return (
    <nav className="page navigation">
      <ul className="pagination">
        {/*FIRST AND PREVIOUS*/}
        <li
          className={`page-item ${
            !props.paginatorData.has_previous_page ? "disabled" : ""
          }`}
        >
          <a className="page-link" onClick={() => props.setPagination(1)}>
            First
          </a>
        </li>
        <li
          className={`page-item ${
            !props.paginatorData.has_previous_page ? "disabled" : ""
          }`}
        >
          <a
            className="page-link"
            onClick={() =>
              props.setPagination(props.paginatorData.previous_page)
            }
          >
            Previous
          </a>
        </li>
        {/*FIRST AND PREVIOUS END*/}

        {/*PAGINATION*/}
        {props.pages.map((page, index) => {
          return (
            <li
              key={index}
              className={`page-item ${
                props.paginatorData.current_page === page ? "active" : ""
              }`}
            >
              <a
                className="page-link"
                onClick={() => props.setPagination(page)}
              >
                {page}
                <span className="sr-only">(current)</span>
              </a>
            </li>
          );
        })}
        {/*PAGINATION END*/}

        {/*NEXT AND LAST*/}
        <li
          className={`page-item ${
            !props.paginatorData.has_next_page ? "disabled" : ""
          }`}
        >
          <a
            className="page-link"
            onClick={() => props.setPagination(props.paginatorData.next_page)}
          >
            Next
          </a>
        </li>
        <li
          className={`page-item ${
            !props.paginatorData.has_next_page ? "disabled" : ""
          }`}
        >
          <a
            className="page-link"
            onClick={() => props.setPagination(props.paginatorData.total_pages)}
          >
            Last
          </a>
        </li>
        {/*NEXT AND LAST END*/}
      </ul>
    </nav>
  );
};

export default ComponentPaginator;