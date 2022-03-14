import React from "react";

function Nav() {
  const categories = [
    {
      name: "Portfolio",
      description:
        "An up-to-date portfolio of my highlighed apps and projects!",
    },
    {
      name: "Resume",
      description: "My current resume and list of my proficiencies.",
    },
  ];

  function categorySelected(name) {
    console.log(`${name} clicked`);
  }

  return (
    <header>
      <h2>
        <a className="name-header" href="/">
          Michelle Stone
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="nav-list">
            <a href="#about">About</a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            <li key={category.name}>
              <span onClick={() => categorySelected(category.name)}>
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
