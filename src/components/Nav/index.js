import React from "react";

function Nav(props) {
  const categories = ["About", "Portfolio", "Resume", "Contact"];

  return (
    <div className="navbar">
      <h2>
        <a className="name-header" href="/">
          Michelle Stone
        </a>
      </h2>
      <ul className="navtabs">
        {categories.map((category) => (
          <li
            className={
              props.currentPage === category ? "cats is-active" : "cats"
            }
            key={category}
          >
            <a
              href={"#" + category.toLowerCase()}
              onClick={() => props.handlePageChange(category)}
              className={
                props.currentPage === category ? "cats active" : "cats"
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
