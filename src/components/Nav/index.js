import React from "react";

function Nav(props) {
  const categories = ["About", "Portfolio", "Resume", "Contact"];

  return (
    <div className="nav-row">
      <ul className="flex-row nav-categories">
        {categories.map((category) => (
          <li
            className={
              props.currentPage === category ? "nav-item is-active" : "nav-item"
            }
            key={category}
          >
            <a
              href={"#" + category.toLowerCase()}
              onClick={() => props.handlePageChange(category)}
              className={
                props.currentPage === category ? "nav-link active" : "nav-link"
              }
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
