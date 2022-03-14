import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Header></Header>
    </div>
  );
}

export default App;
