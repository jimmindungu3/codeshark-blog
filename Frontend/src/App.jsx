import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

function App() {
  return (
    <div className="md:bg-gray-300 dark:bg-gray-950 dark:bg-opacity-95">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
