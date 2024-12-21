import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-300 dark:bg-gray-950 dark:bg-opacity-95">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/blog/first-programming-language" replace />} />
          <Route path="/blog/*" element={<Body />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;