import React, { useState } from "react";
import Nav from "../Nav";
import About from "../About";
import Portfolio from "../Portfolio";
import Resume from "../Resume";
import ContactForm from "../Contact";

function Header() {
  // Sets the default page as the About page.
  const [currentPage, handlePageChange] = useState("About");

  // Use a switch satement to render the selected page, and create a SWA.
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Resume":
        return <Resume />;
      case "Contact":
        return <ContactForm />;

      default:
        return <About />;
    }
  };

  return (
    <header className="flex-row px-1">
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>{renderPage(currentPage)}</div>
    </header>
  );
}

export default Header;
